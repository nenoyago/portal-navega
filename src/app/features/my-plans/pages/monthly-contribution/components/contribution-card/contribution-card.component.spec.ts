import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionCardComponent } from './contribution-card.component';

describe('ContributionCardComponent', () => {
  let component: ContributionCardComponent;
  let fixture: ComponentFixture<ContributionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContributionCardComponent]
    });
    fixture = TestBed.createComponent(ContributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
