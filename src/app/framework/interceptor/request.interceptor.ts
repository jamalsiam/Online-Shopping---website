import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from './../cookie/cookie.service'

@Injectable()

export class RequestInterceptor implements HttpInterceptor {
  private backendPoint: string = 'http://localhost:8000';
  constructor(private cookie: CookieService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authorization = this.cookie.getUserInfo() ? 'Bearer ' + this.cookie.getUserInfo().accessToken : '';

    const apiReq = req.clone({
      url: this.backendPoint + req.url,
      headers: req.headers.set('Authorization', authorization)
    });
    return next.handle(apiReq);
  }
}
