import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  readonly session = inject(SessionService);
  readonly router = inject(Router);

  protected showValues = signal(true);

  readonly nickname = signal(this.session.currentSession?.nickname ?? '');

  handleLogout(): void {
    this.session.clearSession();
  }

  handleGoToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  handleToggleShowValues(): void {
    this.showValues.update((show) => !show);
  }
}
