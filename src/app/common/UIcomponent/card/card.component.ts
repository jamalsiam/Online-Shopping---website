import { Component, OnInit, Input } from '@angular/core';
import { CourseListVM } from 'src/app/common/models/courseListVM.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') card: CourseListVM;
  constructor() { }

  ngOnInit() {
  }

}
