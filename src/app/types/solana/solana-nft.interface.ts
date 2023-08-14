export interface SolanaNftInterface {
  mintAddress: string;
  tokenBalance: number;
  tokenAccount: string;
  metadata: {
    json: {
      name: string;
      symbol: string;
      image: string;
      animation_url: string;
    }
  }
}