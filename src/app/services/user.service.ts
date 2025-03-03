import { Injectable } from '@angular/core';
import { ItemInterface } from '../types/user/item.interface';
import { CoinInterface } from '../types/user/coin.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemResponseInterface } from '../types/user/item-response.interface';
import { CoinResponseInterface } from '../types/user/coin-response.interface';
import { UserProfileInterface } from '../types/user/user-profile.interface';
import { ProfileResponseInterface } from '../types/user/profile-response.interface';

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

  getCoins(): Observable<CoinInterface[]> {
    const url = environment.apiUrl + '/users/me/coins';
    return this.http.get<CoinResponseInterface>(url).pipe(
      map(response => response.coins)
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

  getProfile(handle: string): Observable<UserProfileInterface> {
    const url = environment.apiUrl + '/users/profiles/' + handle;
    return this.http.get<ProfileResponseInterface>(url).pipe(
      map(response => response.profile)
    )
  }
}
