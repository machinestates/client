import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  subject = new BehaviorSubject(true);
  
  constructor() { }

  getSound() {
    // Default to true:
    if (localStorage.getItem('sound') === null) {
      localStorage.setItem('sound', 'true');
      this.subject.next(true);
    } else {
      this.subject.next(localStorage.getItem('sound') === 'true');
    }
    return this.subject.asObservable();
  }

  setSound(setting: boolean) {
    localStorage.setItem('sound', setting.toString());
    this.subject.next(setting);
  }
}
