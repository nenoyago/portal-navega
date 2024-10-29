import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { SessionService } from '../core/services/session.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit, OnDestroy {
  private session = inject(SessionService);
  private snackbar = inject(MatSnackBar);

  private sessionSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.sessionSubscription = this.session.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.session.startSessionExpiryCheck();
        } else if (this.session.shouldExpireSession) {
          this.snackbar.open(
            'Sua sessão expirou. Por favor, faça login novamente.',
            'Fechar'
          );
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }
    this.session.stopSessionExpiryCheck();
  }
}
