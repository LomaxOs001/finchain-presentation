import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    { providedIn: 'root' }
)

export class MyHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            withCredentials: true
        });

        return next.handle(modifiedReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
];