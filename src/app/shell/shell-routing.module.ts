import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-plans'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          )
      },
      {
        path: 'my-plans',
        loadChildren: () =>
          import('../features/my-plans/my-plans.routes').then(
            (m) => m.MyPlansRoutes
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
