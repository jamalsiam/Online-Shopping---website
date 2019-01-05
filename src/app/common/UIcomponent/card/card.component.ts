import { Component, OnInit, Input } from '@angular/core';
import { CardViewListVM } from 'src/app/common/models/cardViewListVM.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('card') card: CardViewListVM;
  constructor() { }

  ngOnInit() {
  }

}
