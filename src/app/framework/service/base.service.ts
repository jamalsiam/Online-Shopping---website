import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  backendURL:string = 'http://localhost:8000';
  constructor(public http: HttpClient) { }
}
