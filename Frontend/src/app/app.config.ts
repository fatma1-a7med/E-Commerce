import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { routes } from './app.routes';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(
    withFetch(),
    withXsrfConfiguration({cookieName : 'XSRF-TOKEN' , headerName:'Xsrf-Headers'}),
   
  ) ]
};
