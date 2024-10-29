import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ChartComponent } from './components/chart/chart.component';
import { ChartContributionComponent } from './components/chart-contribution/chart-contribution.component';
import {
  ContributionCardComponent,
  EditContributionPayload
} from './components/contribution-card/contribution-card.component';

const contribuitions = [
  {
    id: 1,
    type: 'INVESTMENT_MONTHLY',
    label: 'Contribuição mensal',
    value: 359999.99,
    salaryPercentage: 5
  },
  {
    id: 2,
    type: 'INVESTMENT_VOLUNTARY',
    label: 'Contribuição voluntária',
    value: 499999.99
  }
];

@Component({
  selector: 'app-monthly-contribution',
  standalone: true,
  imports: [
    CommonModule,
    ChartComponent,
    ChartContributionComponent,
    ContributionCardComponent
  ],
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less']
})
export class MonthlyContributionComponent {
  snackbar = inject(MatSnackBar);

  readonly chartSummary = {
    headerData: {
      title: 'Total em contribuições'
    },
    contributionsData: contribuitions.map((contribution) => {
      return {
        label: contribution.label,
        value: contribution.value,
        color:
          contribution.type === 'INVESTMENT_MONTHLY' ? '#E22E6F' : '#594CBE'
      };
    })
  };

  readonly contributionsData = contribuitions;

  handleEditContribution({ id }: EditContributionPayload) {
    const contribution = contribuitions.find((c) => c.id === id);

    this.snackbar.open(
      `No momento, não é possível alterar a contribuição "${contribution?.label ?? id}"`,
      'Fechar'
    );
  }
}
