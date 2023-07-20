import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AvatarService } from "src/app/services/avatar.service";
import { uploadAvatarImageAction, uploadAvatarImageFailureAction, uploadAvatarImageSuccessAction } from "../actions/upload-avatar-image.action";
import { LoadingService } from "src/app/services/loading.service";

@Injectable()
export class UploadAvatarImageEffect {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadAvatarImageAction),
      switchMap(async ({ image }) => {
        await this.loadingService.present('Uploading image...');
        return { image };
      }),
      switchMap(({image}) => {
        return this.avatarService.uploadAvatarImage(image).pipe(
          map((avatar: { avatar: string }) => {
            return uploadAvatarImageSuccessAction(avatar);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(uploadAvatarImageFailureAction({ error: errorResponse }))
          }),
          tap(async () => await this.loadingService.dismiss())
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private avatarService: AvatarService,
    private loadingService: LoadingService
  ) {}
}
