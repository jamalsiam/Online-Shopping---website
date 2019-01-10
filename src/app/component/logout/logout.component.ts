import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/framework/cookie/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
    this.cookieService.removeUser();
    this.router.navigate(['signin']);
  }

}
