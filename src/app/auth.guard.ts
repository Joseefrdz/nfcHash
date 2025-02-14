import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from './api.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => { //Se crea un Guard para restringir el acceso a '/work' a aquellos que no hayan iniciado sesión

  const apiService = inject(ApiService);   //inyectamos api.service para poder acceder a sus métodos
  const router = inject(Router)            //inyectamos router para poder redirigir la página

  if (apiService.isAuth()) {                 //Si el método isAuth nos devuelve true desde el api.service tendremos acceso a '/work'
    return true;
  } else {
    router.navigate(['/login']);           // sino, nos devolverá al login
    return false;
  }

};
