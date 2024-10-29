import { Routes } from '@angular/router';

import { MyPlansComponent } from './my-plans.component';

export const MyPlansRoutes: Routes = [
  {
    path: '',
    component: MyPlansComponent,
    children: [
      {
        path: 'monthly-contribution',
        loadComponent: () =>
          import(
            './pages/monthly-contribution/monthly-contribution.component'
          ).then((m) => m.MonthlyContributionComponent)
      }
    ]
  }
];
