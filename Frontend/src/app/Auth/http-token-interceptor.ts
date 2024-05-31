import { HttpInterceptorFn, HttpXsrfTokenExtractor } from '@angular/common/http';
import { inject } from '@angular/core';
import { initZone } from 'zone.js/lib/zone-impl';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenEx = inject(HttpXsrfTokenExtractor)
  const crstTokeName = 'XSRF-TOKEN'

  const crsftoken = tokenEx.getToken() as string
  if (crsftoken != null && !req.headers.has(crstTokeName)) {


    req = req.clone({headers:req.headers.set(crstTokeName,crstTokeName )})

    req = req.clone({headers:req.headers.set(
      'Referer','http://localhost:4200')})
    }
  return next(req);
};
