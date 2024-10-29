import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlansComponent } from './my-plans.component';

describe('MyPlansComponent', () => {
  let component: MyPlansComponent;
  let fixture: ComponentFixture<MyPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlansComponent]
    });
    fixture = TestBed.createComponent(MyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
