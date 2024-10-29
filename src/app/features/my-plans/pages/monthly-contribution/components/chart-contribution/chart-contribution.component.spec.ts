import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContributionComponent } from './chart-contribution.component';

describe('ChartContributionComponent', () => {
  let component: ChartContributionComponent;
  let fixture: ComponentFixture<ChartContributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartContributionComponent]
    });
    fixture = TestBed.createComponent(ChartContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
