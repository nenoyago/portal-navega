import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { SessionService } from './session.service';
import { StorageService } from './storage.service';

describe('SessionService', () => {
  let service: SessionService;
  let storageServiceSpy: jest.Mocked<StorageService>;
  let routerSpy: jest.Mocked<Router>;

  beforeEach(() => {
    const storageSpy = {
      get: jest.fn(),
      set: jest.fn(),
      delete: jest.fn()
    };
    const router = {
      navigate: jest.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: StorageService, useValue: storageSpy },
        { provide: Router, useValue: router }
      ]
    });

    service = TestBed.inject(SessionService);
    storageServiceSpy = TestBed.inject(
      StorageService
    ) as jest.Mocked<StorageService>;
    routerSpy = TestBed.inject(Router) as jest.Mocked<Router>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveSession', () => {
    it('should create a new session and save it to storage', () => {
      const username = 'test@example.com';
      const nickname = 'test';
      storageServiceSpy.set.mockClear();

      service.saveSession({ username });

      const session = service.currentSession;
      expect(session).toBeTruthy();
      expect(session?.username).toBe(username);
      expect(session?.nickname).toBe(nickname);
    });
  });

  describe('clearSession', () => {
    it('should clear the session and navigate to sign-in', () => {
      service.clearSession();

      expect(service.currentSession).toBeNull();
      expect(storageServiceSpy.delete).toHaveBeenCalledWith(
        '@navega-v0.0.1:session'
      );
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/sign-in'], {
        skipLocationChange: true
      });
    });
  });

  describe('session observables', () => {
    it('should return true if a session exists', (done) => {
      service.saveSession({ username: 'test@example.com' });
      service.isAuthenticated$.subscribe((isAuthenticated) => {
        expect(isAuthenticated).toBe(true);
        done();
      });
    });

    it('should return false if no session exists', (done) => {
      service.clearSession();
      service.isAuthenticated$.subscribe((isAuthenticated) => {
        expect(isAuthenticated).toBe(false);
        done();
      });
    });
  });

  describe('startSessionExpiryCheck', () => {
    it('should clear session after expiration', (done) => {
      const username = 'test@example.com';
      const shortExpirySession = {
        expiresAt: Date.now() + 100,
        id: uuidv4(),
        username,
        nickname: 'test'
      };

      service.saveSession({ username });
      service['session'].next(shortExpirySession);
      service.startSessionExpiryCheck();

      setTimeout(() => {
        expect(service.currentSession).toBeNull();
        done();
      }, 150);
    });
  });

  describe('stopSessionExpiryCheck', () => {
    it('should stop expiry check timer', () => {
      service['sessionExpiryCheck$'] = new Subscription();

      const unsubscribeSpy = jest.spyOn(
        service['sessionExpiryCheck$'],
        'unsubscribe'
      );

      service.stopSessionExpiryCheck();

      expect(unsubscribeSpy).toHaveBeenCalled();
    });
  });
});
