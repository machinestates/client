import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new BehaviorSubject<any>({});
  private keepAfterNavigationChange = false;

  /**
   * On construction, subscribe to router events to check whether to keep after nav changes
   *
   * @param router // Router object
   */
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.keepAfterNavigationChange) {
          this.keepAfterNavigationChange = false;
        } else {
          this.subject.next({});
        }
      }
    });
  }

  /**
   * Displays 'intro'-based messages
   *
   * @param messages // Strings to be used by Typed.js
   * @param typeSpeed // Speed of typing to be used by Typed.js
   * @param keepAfterNavigationChange // Whether to keep the alert up after a nav change
   */
  public intro(messages: Array<string>, typeSpeed: number = 60, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'intro', messages });
  }

  /**
   * Displays 'success'-based messages
   *
   * @param messages // Strings to be used by Typed.js
   * @param typeSpeed // Speed of typing to be used by Typed.js
   * @param keepAfterNavigationChange // Whether to keep the alert up after a nav change
   */
  public success(messages: Array<string>, typeSpeed: number = 60, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', messages });
  }

  /**
   * Displays 'primary' neutral messages
   *
   * @param messages // Strings to be used by Typed.js
   * @param typeSpeed // Speed of typing to be used by Typed.js
   * @param keepAfterNavigationChange // Whether to keep the alert up after a nav change
   */
  public primary(messages: Array<string>, typeSpeed: number = 60, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'primary', messages });
  }

  /**
   * Displays 'error'-based messages
   *
   * @param messages // Strings to be used by Typed.js
   * @param typeSpeed // Speed of typing to be used by Typed.js
   * @param keepAfterNavigationChange // Whether to keep the alert up after a nav change
   */
  public error(messages: Array<string>, typeSpeed: number = 60, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', messages });
  }

  /**
   * Observable for message pushed
   */
  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}