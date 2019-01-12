import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService{

  constructor(public http: HttpClient) { }

  signup(data): Observable<any> {
    return this.http.post(`/api/auth/signup`, {data});
  }
}
