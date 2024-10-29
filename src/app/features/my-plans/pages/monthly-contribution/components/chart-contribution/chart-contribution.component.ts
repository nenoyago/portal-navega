import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-contribution',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
  templateUrl: './chart-contribution.component.html',
  styleUrls: ['./chart-contribution.component.less']
})
export class ChartContributionComponent {
  @Input() title?: string;
  @Input() value?: number;
  @Input() color?: string;
}
