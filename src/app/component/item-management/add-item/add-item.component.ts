import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItemVM } from 'src/app/common/models/itemVM.model';
import { MatDialogRef } from '@angular/material';
import { ItemService } from 'src/app/common/services/item.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})


export class AddItemComponent implements OnInit {

  itemForm: FormGroup;
  loading: boolean = false;
  imagelistBase64 = [];

  listGroups = [
    {
      name: 'Fashion',
      list: [
        { value: '1', viewValue: 'Men' },
        { value: '2', viewValue: 'women' },
        { value: '3', viewValue: 'Children' }
      ]
    },
    {
      name: 'Accessories',
      list: [
        { value: '4', viewValue: 'Squirtle' },
        { value: '5', viewValue: 'Psyduck' },

      ]
    }
  ];


  constructor(private formBuilder: FormBuilder, 
    private itemService: ItemService, 
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AddItemComponent>) { }

  get _itemForm() { return this.itemForm.controls; }


  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get imageList() {
    return this._itemForm.images.value;
  }

  onFileChange(event) {

    if (event.target.files && event.target.files.length) {
      this.itemForm.patchValue({
        images: [...this.imageList, ...Object.values(event.target.files)]
      });
      this.displayImages(false);


    }
  }


  displayImages(update) {

    if (update) {
      this.imagelistBase64 = [];
    }

    this.imageList.forEach(file => {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file)
    });
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.imagelistBase64.push(btoa(binaryString));
  }

  removeImage(index) {

    let imageListClone = Object.assign([], this.imageList);
    imageListClone.splice(index, 1)
    this.itemForm.patchValue({
      images: imageListClone
    });
    this.displayImages(true);

  }

  onSubmit() {

    if (this.itemForm.invalid) {
      this.markFormGroupTouched(this.itemForm);
      this.loading = false;
      return;
    }
    if (!this.loading) {
      this.loading = true;
      this.itemService.addItem({
        ...this.itemForm.value
      })
        .subscribe(
          (res: ItemVM) => {

            this.loading = false;
            console.log(res);
            
            this.toastr.success('Added Successfully', res.name);
            this.imagelistBase64 = [];
            this.itemForm.reset();
            this.dialogRef.close();

          },
          (error) => {
            this.loading = false;
            this.toastr.error('Error Occurred');
          })

    }

  }


  ngOnInit() {
    this.itemForm = this.itemRecordEmpty;

  }
  get itemRecordEmpty() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: [0, []],
      images: [[], [Validators.required]],
      isNew: [false, []]

    });
  }

}
