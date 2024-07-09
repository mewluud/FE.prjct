import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  private readonly storageKey = 'app_state';

  getState<T>(key: string): T | null {
    const storedData = sessionStorage.getItem(`${this.storageKey}_${key}`);
    return storedData ? JSON.parse(storedData) as T : null;
  }

  setState<T>(key: string, data: T): void {
    sessionStorage.setItem(`${this.storageKey}_${key}`, JSON.stringify(data));
  }
}
