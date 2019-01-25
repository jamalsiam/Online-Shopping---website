import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/common/services/item.service';
import { ItemVM } from 'src/app/common/models/itemVM.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  itemList: ItemVM[] = [];
  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.itemService.itemListHomePage().subscribe(res => {
      this.itemList = res
    }
    )
  }

}
