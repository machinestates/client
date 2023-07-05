import { Action, createReducer, on } from "@ngrx/store";
import { UserStateInterface } from "src/app/types/user/user-state.interface";
import { getItemsAction, getItemsFailureAction, getItemsSuccessAction } from "./actions/get-items.action";
import { equipItemAction, equipItemFailureAction, equipItemSuccessAction } from "./actions/equip-item.action";
import { unequipItemAction, unequipItemFailureAction, unequipItemSuccessAction } from "./actions/unequip-item.action";
import { getCoinsAction, getCoinsFailureAction, getCoinsSuccessAction } from "./actions/get-coins.action";

const initialState: UserStateInterface = {
  isLoading: false,
  error: null,
  items: null,
  coins: null
}

const userReducer = createReducer(
  initialState,
  on(
    getItemsAction,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getItemsSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      items: action.items
    })
  ),
  on(
    getItemsFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    getCoinsAction,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getCoinsSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      coins: action.coins
    })
  ),
  on(
    getCoinsFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    equipItemAction,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    equipItemSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      items: action.items
    })
  ),
  on(
    equipItemFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    unequipItemAction,
    (state): UserStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    unequipItemSuccessAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      items: action.items
    })
  ),
  on(
    unequipItemFailureAction,
    (state, action): UserStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
);

export function reducers(state: UserStateInterface, action: Action) {
  return userReducer(state, action)
}
