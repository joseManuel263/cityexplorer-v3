import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalstorageService);
  const router = inject(Router); // Cambiado de Inject a inject
  const token = localStorage.getItem('accessToken');
  
  if (token) {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}` // Corregido la cabecera
      }
    });
  }
  
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        router.navigate(['/login']); // Asegúrate de que router está inyectado correctamente
      }
      return throwError(() => err.error);
    })
  );
};
