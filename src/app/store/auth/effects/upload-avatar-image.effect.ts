import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { AvatarService } from "src/app/services/avatar.service";
import { uploadAvatarImageAction, uploadAvatarImageFailureAction, uploadAvatarImageSuccessAction } from "../actions/upload-avatar-image.action";

@Injectable()
export class UploadAvatarImageEffect {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadAvatarImageAction),
      switchMap(({image}) => {
        return this.avatarService.uploadAvatarImage(image).pipe(
          map((avatar: { avatar: string }) => {
            return uploadAvatarImageSuccessAction(avatar);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(uploadAvatarImageFailureAction({ error: errorResponse }))
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private avatarService: AvatarService
  ) {}
}
