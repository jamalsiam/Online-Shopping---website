import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/framework/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public http: HttpClient) {
    super(http)
  }

  login(data): Observable<any> {
    return this.http.post(`${this.backendURL}/api/auth/login`, data);
  }
}
