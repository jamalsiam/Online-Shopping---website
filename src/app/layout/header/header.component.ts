import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSideBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  openMenu() {
    console.log(1111111111);
    
    this.openSideBar.emit();
  }
  ngOnInit() {
  }

}
