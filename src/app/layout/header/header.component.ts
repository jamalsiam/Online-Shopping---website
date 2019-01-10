import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'src/app/framework/cookie/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSideBar: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService) { }

  get isUserExists() {
    return this.cookieService.checkUserExists();
  }

  openMenu() {
    this.openSideBar.emit();
  }

  ngOnInit() {
  }

}
