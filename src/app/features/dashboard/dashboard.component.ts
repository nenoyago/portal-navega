import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, NgIconComponent],
  providers: [
    provideIcons({
      heroArrowRight
    })
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  readonly favorites = [
    {
      title: 'Meu plano',
      description: 'Acesse seu plano para ver detalhes.',
      route: '/my-plans/monthly-contribution'
    }
  ];
}
