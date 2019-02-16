import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public http: HttpClient) { }
  updateUserInfo(username, phoneNumber): Observable<any> {
    return this.http.put(`/api/account/info`, { username, phoneNumber });
  }

  updateUserImage(image): Observable<any> {

    const formData: FormData = new FormData();
    formData.append("uploads", image, image.name);
    return this.http.put<any>(`/api/account/image`, formData);
  }

}
