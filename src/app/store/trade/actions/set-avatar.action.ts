import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { AvatarInterface } from "src/app/types/trade/avatar.interface";

export const setAvatarAction = createAction(
  ActionTypes.SET_AVATAR,
  props<{ avatar: AvatarInterface }>()
);
