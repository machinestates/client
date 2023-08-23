import { Action, createReducer, on } from "@ngrx/store";
import { SolanaStateInterface } from "src/app/types/solana/solana-state.interface";
import { connectPhantomWalletAction, connectPhantomWalletFailureAction, connectPhantomWalletSuccessAction } from "./actions/connect-phantom-wallet.action";
import { getNftsAction, getNftsSuccessAction } from "./actions/get-nfts.action";
import { getMintedNftAction, getMintedNftFailureAction, getMintedNftSuccessAction } from "./actions/get-minted-nft.action";
import { createUserNftAction, createUserNftSuccessAction } from "./actions/create-user-nft.action";

const initialState: SolanaStateInterface = {
  isLoading: false,
  isPending: false,
  publicKey: null,
  error: null,
  nfts: null,
  mintedNft: null
}

const solanaReducer = createReducer(
  initialState,
  on(
    createUserNftAction,
    (state): SolanaStateInterface => ({
      ...state,
      isPending: true,
      error: null
    })
  ),
  on(
    createUserNftSuccessAction,
    (state, action): SolanaStateInterface => ({
      ...state,
      isPending: false,
      mintedNft: action.nft
    })
  ),
  on(
    getNftsAction,
    (state): SolanaStateInterface => ({
      ...state,
      isPending: true,
      error: null
    })
  ),
  on(
    getNftsSuccessAction,
    (state, action): SolanaStateInterface => ({
      ...state,
      isPending: false,
      nfts: action.tokens
    })
  ),
  on (
    getMintedNftAction,
    (state): SolanaStateInterface => ({
      ...state,
      isPending: true,
      error: null
    })
  ),
  on(
    getMintedNftSuccessAction,
    (state, action): SolanaStateInterface => ({
      ...state,
      isPending: false,
      mintedNft: action.nft
    })
  ),
  on(
    connectPhantomWalletAction,
    (state): SolanaStateInterface => ({
      ...state,
      isPending: true,
      error: null
    })
  ),
  on(
    connectPhantomWalletSuccessAction,
    (state, action): SolanaStateInterface => ({
      ...state,
      isPending: false,
      publicKey: action.publicKey
    })
  ),
  on(
    connectPhantomWalletFailureAction,
    (state, action): SolanaStateInterface => ({
      ...state,
      isPending: false,
      error: true
    })
  )
);

export function reducers(state: SolanaStateInterface, action: Action) {
  return solanaReducer(state, action)
}
