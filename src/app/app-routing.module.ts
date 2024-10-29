import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/security/guards/auth.guard';
import { nonAuthGuard } from './core/security/guards/non-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [nonAuthGuard],
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./core/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      bindToComponentInputs: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
