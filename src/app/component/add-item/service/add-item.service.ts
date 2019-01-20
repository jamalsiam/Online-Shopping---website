import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemVM } from 'src/app/common/models/itemVM.model';
@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor(public http: HttpClient) { }

  addItem(data: ItemVM): Observable<any> {



    const formData: FormData = new FormData();

    for (var i = 0; i < data.images.length; i++) {
      formData.append("uploads", data.images[i], data.images[i].name);
    }
    formData.append('data', JSON.stringify(data));

    return this.http.post<ItemVM>(`/api/item`, formData);
  }



}
