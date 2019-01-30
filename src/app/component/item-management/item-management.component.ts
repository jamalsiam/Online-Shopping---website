import { Component, OnInit } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialog } from '@angular/material';
import { ItemService } from 'src/app/common/services/item.service';
import { ItemVM } from 'src/app/common/models/itemVM.model';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.scss']
})
export class ItemManagementComponent implements OnInit {
  displayedColumns: string[] = ['images', 'name', 'category', 'createdAt', 'discount', 'new', 'price', 'action'];
  deleteLoader: number = 0;
  itemList: ItemVM[];
  constructor(private dialog: MatDialog, private itemService: ItemService) {
    this._itemList.subscribe()
  }

  openAddItemDialog() {
    this.dialog.open(AddItemComponent)
    .afterClosed().subscribe(result => {
      this._itemList.subscribe()
    });
  }

  get _itemList() {
    return this.itemService.accountList()
      .pipe(
        tap(res => {
          this.itemList = res;
        }))
  }

  onDeleteItem(itemId: number) {
    this.deleteLoader = itemId;
    this.itemService.deleteItem(itemId)
      .pipe(
        catchError((err) => err.status === 200 ? of({ success: true }) : of({ success: false })),
        tap(res => {
          this._itemList.subscribe()
        })
      ).subscribe();

  }
  ngOnInit() {
  }

}
