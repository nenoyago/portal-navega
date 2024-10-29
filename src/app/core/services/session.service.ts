import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, map, timer } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { StorageService } from './storage.service';

type Session = {
  expiresAt: number;
  id: string;
  username: string;
  nickname: string;
};

type SessionParams = {
  username: string;
};

const SESSION_STORAGE_KEY = '@navega-v0.0.1:session';

function getStoragedSession(storage: StorageService): Session | null {
  return storage.get<Session>(SESSION_STORAGE_KEY) ?? null;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session = new BehaviorSubject<Session | null>(
    (() => {
      const storagedValue = getStoragedSession(this.storage);
      if (!storagedValue) {
        return null;
      }
      return storagedValue;
    })()
  );
  public readonly session$ = this.session.asObservable();
  public readonly isAuthenticated$ = this.session$.pipe(
    map((session) => !!session)
  );

  private sessionExpiryCheck$: Subscription | null = null;

  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  get currentSession(): Session | null {
    return this.session.value;
  }

  get isAuthenticated(): boolean {
    return !!this.currentSession;
  }

  private getNickname(username: string): string {
    const isAuthenticatedByEmail = username.includes('@');

    let nickname = 'Anônimo';

    if (isAuthenticatedByEmail) {
      const [nicknamePart] = username.split('@');

      nickname = nicknamePart;
    }

    return nickname;
  }

  saveSession({ username }: SessionParams) {
    const nickname = this.getNickname(username);

    const newSession: Session = {
      expiresAt: Date.now() + 1000 * 60 * 45, // 45 minutos de expiração
      id: uuidv4(),
      username,
      nickname
    };
    this.session.next(newSession);
    this.storage.set(SESSION_STORAGE_KEY, newSession);
  }

  clearSession() {
    this.session.next(null);
    this.storage.delete(SESSION_STORAGE_KEY);

    this.router.navigate(['/auth/sign-in'], {
      skipLocationChange: true
    });
  }

  startSessionExpiryCheck() {
    this.stopSessionExpiryCheck();

    if (this.currentSession) {
      const expiresIn = this.currentSession.expiresAt - Date.now();
      this.sessionExpiryCheck$ = timer(expiresIn).subscribe(() => {
        this.clearSession();
      });
    }
  }

  stopSessionExpiryCheck() {
    if (this.sessionExpiryCheck$) {
      this.sessionExpiryCheck$.unsubscribe();
    }
  }
}
