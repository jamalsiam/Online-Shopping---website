import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideBarOpen = false;

  openSideBar(status) {
    console.log(status);
    
    this.isSideBarOpen = status;
  }
}
