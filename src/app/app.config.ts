import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';

import { appRoutes } from '../app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { authFeatureKey, authReducer } from '../app/auth/store/reducers';
import * as authEffects from '../app/auth/store/effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideClientHydration(),
    provideStore(),
    provideEffects(authEffects),
    provideHttpClient(),
    provideState(authFeatureKey, authReducer),
  ],
};
