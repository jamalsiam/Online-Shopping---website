import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as animate from './aside-bar.animations';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss'],
  animations: [animate.Animations]

})
export class AsideBarComponent implements OnInit {
  @Input('isSideBarOpen') isSideBarOpen: boolean;
  @Output() openSideBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  closeAsideBar() {
    this.openSideBar.emit();
  }

  ngOnInit() {
  }

}
