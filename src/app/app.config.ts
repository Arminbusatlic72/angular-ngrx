import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';

import { appRoutes } from '../app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { authFeatureKey, authReducer } from '../app/auth/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideClientHydration(),
    provideStore(),
    provideHttpClient(),
    provideState(authFeatureKey, authReducer),
  ],
};
