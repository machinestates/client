import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { AuthErrorInterface } from "src/app/types/auth/auth-error.interface";
import { AvatarImageInterface } from "src/app/types/auth/avatar-image.interface";


export const uploadAvatarImageAction = createAction(
  ActionTypes.UPLOAD_AVATAR_IMAGE,
  props<{ image: string }>()
);

export const uploadAvatarImageSuccessAction = createAction(
  ActionTypes.UPLOAD_AVATAR_IMAGE_SUCCESS,
  props<{ avatar: string }>()
);

export const uploadAvatarImageFailureAction = createAction(
  ActionTypes.UPLOAD_AVATAR_IMAGE_FAILURE,
  props<{error: AuthErrorInterface }>()
);