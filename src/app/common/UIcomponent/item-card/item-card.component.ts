import { Component, OnInit,Input } from '@angular/core';
import { ItemVM } from '../../models/itemVM.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
@Input('data') data:ItemVM;
  constructor() { }

  ngOnInit() { }

}
