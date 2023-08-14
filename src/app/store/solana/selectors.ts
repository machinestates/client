import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/types/app-state.interface";
import { SolanaStateInterface } from "src/app/types/solana/solana-state.interface";

export const solanaFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SolanaStateInterface
>('solana');

export const publicKeySelector = createSelector(
  solanaFeatureSelector,
  (solanaState: SolanaStateInterface) => solanaState.publicKey
);

export const nftsSelector = createSelector(
  solanaFeatureSelector,
  (solanaState: SolanaStateInterface) => solanaState.nfts
);
