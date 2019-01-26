import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/common/services/item.service';
import { ItemVM } from 'src/app/common/models/itemVM.model';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  itemData: ItemVM;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) {
    this.route.params.subscribe(params => {
      delete this.itemData;
      this.itemService.viewItem(params['id'])
        .subscribe((res) => {
          console.log(res);
          this.itemData = res;
        },
          (err) => {
            this.router.navigate(['/404'])
          })
    });

  }
  discount(price, of): number {
    if (!of) {
      return price;
    }

    return price -= price * (of / 100)
  }
  ngOnInit(): void { }
}

