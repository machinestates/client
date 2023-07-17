import { Action, createReducer, on } from "@ngrx/store";
import { SolanaStateInterface } from "src/app/types/solana/solana-state.interface";
import { connectPhantomWalletAction, connectPhantomWalletFailureAction, connectPhantomWalletSuccessAction } from "./actions/connect-phantom-wallet.action";

const initialState: SolanaStateInterface = {
  isLoading: false,
  isPending: false,
  publicKey: null,
  error: null,
}

const solanaReducer = createReducer(
  initialState,
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
