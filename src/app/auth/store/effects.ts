import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { of } from 'rxjs';
export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSuccess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.registerFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
