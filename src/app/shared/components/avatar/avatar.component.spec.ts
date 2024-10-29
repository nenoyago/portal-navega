import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AvatarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create the avatar component', () => {
    expect(component).toBeTruthy();
  });

  it('should set initials based on the name input', () => {
    component.name = 'John Doe';
    component.ngOnInit();
    expect(component.initials).toBe('JD');
  });

  it('should set initials correctly when only first name is provided', () => {
    component.name = 'John';
    component.ngOnInit();
    expect(component.initials).toBe('JO');
  });

  it('should set initials correctly when no name is provided', () => {
    component.name = '';
    component.ngOnInit();
    expect(component.initials).toBe('');
  });

  it('should render the image when src is provided', () => {
    component.src = 'https://example.com/image.jpg';
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain('https://example.com/image.jpg');
  });

  it('should render initials when src is not provided', () => {
    component.name = 'Jane Doe';
    component.ngOnInit();
    fixture.detectChanges();

    const initialsElement = fixture.nativeElement.querySelector('span');
    expect(initialsElement).toBeTruthy();
    expect(initialsElement.textContent).toBe('JD');
  });

  it('should call onError and set src to null when image fails to load', () => {
    component.src = 'https://example.com/invalid-image.jpg';
    component.onError();
    expect(component.src).toBeNull();
  });

  it('should render placeholder when no src and initials are provided', () => {
    component.name = '';
    component.ngOnInit();
    fixture.detectChanges();

    const placeholder = fixture.nativeElement.querySelector('svg');
    expect(placeholder).toBeTruthy();
  });
});
