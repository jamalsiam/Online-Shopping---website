import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from '../cookie/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedCanActivate implements CanActivate {
  constructor(private cookieService: CookieService) {

   }

  canActivate() {
    return this.cookieService.checkUserExists() ;
  }
}



 