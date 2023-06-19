import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error getting from localStorage', error);
      return null;
    }
  }

  remove(key: string): any {
    localStorage.removeItem(key);
  }
}
