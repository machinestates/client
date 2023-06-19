import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { SignupRequestInterface } from '../types/auth/signup-request.interface';
import { AuthResponseInterface } from '../types/auth/auth-response.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../types/auth/current-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(data: SignupRequestInterface) {
    const url = environment.apiUrl + '/users/me';
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(response => response.user)
    )
  }

  signup(data: SignupRequestInterface) {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(response => response.user)
    )
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/me';
    return this.http.get<AuthResponseInterface>(url).pipe(
      map(response => response.user)
    )
  }
}
