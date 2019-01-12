import { Injectable } from '@angular/core';
import { AccountVM } from './models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountStore {
  private accountInfo: AccountVM;

  public getAccountInfo(): AccountVM {
    return this.accountInfo;
  }

  public setAccountInfo(accountInfo: AccountVM) {
    this.accountInfo = accountInfo;
  }

}
