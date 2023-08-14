import { SolanaNftInterface } from "./solana-nft.interface";

export interface SolanaStateInterface {
  isPending: boolean;
  publicKey: string;
  error: boolean;
  isLoading: boolean;
  nfts: SolanaNftInterface[];
}
