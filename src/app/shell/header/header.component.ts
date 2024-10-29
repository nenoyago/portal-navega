import { Component, inject, signal } from '@angular/core';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  readonly session = inject(SessionService);

  nickname = signal(this.session.currentSession?.nickname ?? '');

  handleLogout(): void {
    this.session.clearSession();
  }
}
