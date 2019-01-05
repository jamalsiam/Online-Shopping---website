import { Component, OnInit, Input } from '@angular/core';
import * as animate from './card-viewer.animation';
import { CardViewListVM } from './../../../../common/models/cardViewListVM.model';
import { CardViewerStates } from './../../../../common/enums/cardViewerStates.enum';
const itemOuterWidth = 252;

@Component({
  selector: 'app-card-viewer',
  templateUrl: './card-viewer.component.html',
  styleUrls: ['./card-viewer.component.css'],
  animations: [animate.Animations]
})

export class CardViewerComponent implements OnInit {
  @Input('list') list: CardViewListVM[];
  shiftValue: number;
  currentState: string;
  listLength: number;
  numberOfCourseWillView: number;
  viewPreviousButton: boolean;
  viewNextButton: boolean;

  constructor() {
    this.shiftValue = 0;
    this.currentState = '';
    this.numberOfCourseWillView = 5;
    this.viewPreviousButton = false;


  }

  changeState() {
    this.currentState === CardViewerStates.stateOne ?
      this.currentState = CardViewerStates.stateTwo : this.currentState = CardViewerStates.stateOne;
  }

  nextPage() {
    const nextPage = this.shiftValue - itemOuterWidth * this.numberOfCourseWillView;
    const displayedCourseCounter = Math.abs(nextPage) / itemOuterWidth;

    if (this.listLength - displayedCourseCounter < this.numberOfCourseWillView) {
      this.viewNextButton = false;
      this.shiftValue -= itemOuterWidth * (this.listLength - displayedCourseCounter);
    } else {
      this.shiftValue -= itemOuterWidth * this.numberOfCourseWillView;
    }
    this.viewPreviousButton = true;
    this.changeState();





  }
  previousPage() {
    if (this.shiftValue / itemOuterWidth < -this.numberOfCourseWillView) {

      this.shiftValue = this.shiftValue + itemOuterWidth * this.numberOfCourseWillView;

    } else {

      this.viewPreviousButton = false;
      this.shiftValue = 0;
      
    }
    this.viewNextButton = true;
    this.changeState()
  }


  ngOnInit() {
    this.listLength = this.list.length;
    if (this.listLength >= this.numberOfCourseWillView) {
      this.viewNextButton = true;
    }
  }

}
