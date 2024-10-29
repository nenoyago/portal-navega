import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { ChartContributionComponent } from '../chart-contribution/chart-contribution.component';

type HeaderData = {
  title: string;
};

type Data = {
  label: string;
  value: number;
  color: string;
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ChartContributionComponent],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  @Input() headerData: HeaderData | undefined;
  @Input() contributionsData: Data[] = [];

  protected total = 0;

  ngOnInit(): void {
    this.total = this.contributionsData.reduce(
      (acc, { value }) => acc + value,
      0
    );
  }
}
