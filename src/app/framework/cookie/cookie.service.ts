import { Injectable } from '@angular/core';
import * as NgxCookie from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookieService {
  userKey = 'user';

  constructor(private cookie: NgxCookie.CookieService) { }

  checkUserExists(): boolean {

    const cookieExists: boolean = this.cookie.check(this.userKey);
    return cookieExists;
  }

  getUserInfo(): any {
    try {
      const value: any = JSON.parse(this.cookie.get(this.userKey));
      return value;

    } catch (error) {
      return null;
    }


  }

  setUserInfo(value: any): any {
    this.cookie.set(this.userKey, JSON.stringify(value));
  }

  removeUser() {
    this.cookie.delete(this.userKey);

  }

  getAll() {
   return this.cookie.getAll();
  }
  removeAll() {
    this.cookie.deleteAll();
  }
}
