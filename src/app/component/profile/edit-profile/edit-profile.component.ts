import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountStore } from 'src/app/framework/dataStore/account/account.store';
import { AccountVM } from 'src/app/framework/dataStore/account/models/account.model';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EditProfileComponent>,
    private formBuilder: FormBuilder,
    private accountStore: AccountStore,
    private profileService: ProfileService) { }

  get userData(): AccountVM {
    return this.accountStore.getAccountInfo()
  }

  onSubmit() {

    const { name, phoneNumber } = this.userForm.value
    this.profileService.updateUserInfo(name, phoneNumber).subscribe((res) => {
      this.dialogRef.close();
      this.accountStore.setAccountInfo({
        ...this.accountStore.getAccountInfo(),
        phoneNumber,
        username: name
      })
    })

  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],

    });
    this.userForm.setValue(
      {
        name: this.userData.username,
        phoneNumber: this.userData.phoneNumber,

      }
    )
  }

}
