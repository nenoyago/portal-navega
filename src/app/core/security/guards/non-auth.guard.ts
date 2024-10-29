import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { SessionService } from '../../services/session.service';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionService);
  const router = inject(Router);

  return session.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return router.createUrlTree(['dashboard']);
      }
      return true;
    })
  );
};
