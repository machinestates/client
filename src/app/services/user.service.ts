import { Injectable } from '@angular/core';
import { ItemInterface } from '../types/user/item.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemResponseInterface } from '../types/user/item-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemInterface[]> {
    const url = environment.apiUrl + '/users/me/items';
    return this.http.get<ItemResponseInterface>(url).pipe(
      map(response => response.items)
    )
  }

  equipItem(item: ItemInterface): Observable<ItemInterface[]> {
    const url = environment.apiUrl + '/users/me/items/' + item.uuid;
    return this.http.put<ItemResponseInterface>(url, { equipped: true }).pipe(
      map(response => response.items)
    )
  }

  unequipItem(item: ItemInterface): Observable<ItemInterface[]> {
    const url = environment.apiUrl + '/users/me/items/' + item.uuid;
    return this.http.put<ItemResponseInterface>(url, { equipped: false }).pipe(
      map(response => response.items)
    )
  }
}
