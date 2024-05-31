import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './_services/token.service'; // Adjust the path as necessary

export const authGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.isValid()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
