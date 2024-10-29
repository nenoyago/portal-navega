import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { SessionService } from '../../services/session.service';

class MockSessionService {
  saveSession = jest.fn();
}

class MockRouter {
  navigate = jest.fn().mockResolvedValue(true);
}

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let sessionService: MockSessionService;
  let router: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SignInComponent],
      providers: [
        { provide: SessionService, useClass: MockSessionService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    sessionService = TestBed.inject(
      SessionService
    ) as unknown as MockSessionService;
    router = TestBed.inject(Router) as unknown as MockRouter;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message when username is empty', () => {
    const usernameControl = component.form.controls['username'];
    usernameControl.setValue('');
    component.onSubmit();

    fixture.detectChanges();
    const usernameError = fixture.nativeElement.querySelector('mat-error');

    expect(usernameError).toBeTruthy();
    expect(usernameError.textContent).toContain('CPF ou e-mail é obrigatório.');
  });

  it('should display an error message when password is empty', () => {
    const passwordControl = component.form.controls['password'];
    passwordControl.setValue('');
    component.onSubmit();

    fixture.detectChanges();

    const passwordError =
      fixture.nativeElement.querySelectorAll('mat-error')[1];

    expect(passwordError).toBeTruthy();
    expect(passwordError.textContent).toContain('Senha é obrigatória.');
  });

  it('should call saveSession and navigate when form is valid', async () => {
    component.form.controls['username'].setValue('test@example.com');
    component.form.controls['password'].setValue('password123');

    const saveSessionSpy = jest.spyOn(sessionService, 'saveSession');
    const navigateSpy = jest.spyOn(router, 'navigate');

    component.onSubmit();

    await new Promise((resolve) => setTimeout(resolve, 700));

    expect(saveSessionSpy).toHaveBeenCalledWith({
      username: 'test@example.com'
    });

    expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);

    saveSessionSpy.mockRestore();
    navigateSpy.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
