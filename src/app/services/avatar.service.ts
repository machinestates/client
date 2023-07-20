import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }

  uploadAvatarImage(image: string): Observable<{ avatar: string }> {
    const url = environment.apiUrl + '/users/me/avatar';
    return this.http.put<{ avatar: string }>(url, { image });
  }
}
