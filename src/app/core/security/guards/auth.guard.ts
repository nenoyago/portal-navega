import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { SessionService } from '../../services/session.service';

export const authGuard: CanActivateFn = () => {
  const session = inject(SessionService);
  const router = inject(Router);

  return session.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      return isAuthenticated || router.createUrlTree(['auth', 'sign-in']);
    })
  );
};
