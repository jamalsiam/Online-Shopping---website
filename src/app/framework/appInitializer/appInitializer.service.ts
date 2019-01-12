import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from '../cookie/cookie.service';
import { AccountVM } from '../dataStore/account/models/account.model';
import { AccountStore } from '../dataStore/account/account.store';


@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(private httpClient: HttpClient, private cookie: CookieService,private accountStore: AccountStore) {

  }

  initializeApp(): Promise<any> {


    return this.httpClient.get(`/api/account/info`)
      .toPromise()
      .then((res: AccountVM) => {
        this.accountStore.setAccountInfo(res)
      })
      .catch((error) => {

        if (error.status === 404) {
          this.cookie.removeUser();
        }
        console.log('No Account Info!!!');

      })

  }
}