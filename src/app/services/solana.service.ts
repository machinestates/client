import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolanaService {

  constructor() { }

  

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
