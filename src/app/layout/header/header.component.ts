import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'src/app/framework/cookie/cookie.service';
import { AccountStore } from 'src/app/framework/dataStore/account/account.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSideBar: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService, private accountStore: AccountStore) { }

  get isUserExists() {
    return this.cookieService.checkUserExists();
  }

  get username() {
    return this.accountStore.getAccountInfo().username;
  }

  openMenu() {
    this.openSideBar.emit();
  }

  ngOnInit() {
    console.log(this.username);

  }

}
