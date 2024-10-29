import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyContributionComponent } from './monthly-contribution.component';

describe('MonthlyContributionComponent', () => {
  let component: MonthlyContributionComponent;
  let fixture: ComponentFixture<MonthlyContributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyContributionComponent]
    });
    fixture = TestBed.createComponent(MonthlyContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
