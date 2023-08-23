import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolanaService {

  constructor(private http: HttpClient) { }

  getTokens(wallet: string, type = 'nft'): Observable<any> {
    const url = environment.apiUrl + '/tokens?wallet=' + wallet + '&type=' + type;
    return this.http.get(url);
  }

  createUserNft(wallet: string, image: string): Observable<any> {
    const url = environment.apiUrl + '/tokens/nft';
    return this.http.post(url, { wallet, image });
  }

  getMintedNft(): Observable<any> {
    const url = environment.apiUrl + '/tokens/nft';
    return this.http.get(url);
  }

  async connectPhantomWallet(): Promise<string | boolean> {
    if ('phantom' in window) {
      const provider = (window as any).phantom?.solana;
      if (provider?.isPhantom) {
        const connected = await provider.connect();
        if (connected) {
          return provider.publicKey.toString();
        }
      }
    }
    throw new Error('No Phantom Wallet found.');
    // TODO: For mobile, use deeplinking to open Phantom:
  }
}
