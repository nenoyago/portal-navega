import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  set<T>(key: string, value: T): void {
    const storageValue = JSON.stringify(value);

    localStorage.setItem(key, storageValue);
  }

  get<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);

      if (!value) {
        return null;
      }

      const storageValue = JSON.parse(value);

      return storageValue as T;
    } catch {
      return null;
    }
  }

  exists(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
