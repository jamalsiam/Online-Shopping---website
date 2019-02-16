import { Component, OnInit } from '@angular/core';
import { AccountStore } from 'src/app/framework/dataStore/account/account.store';
import { AccountVM } from 'src/app/framework/dataStore/account/models/account.model';
import { MatDialog } from '@angular/material';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  changeImageLoader = false;
  constructor(private accountStore: AccountStore, private dialog: MatDialog, private profileService: ProfileService) { }

  get userData(): AccountVM {
    return this.accountStore.getAccountInfo();
  }
  ngOnInit() { }

  openEditProfileDialog() {
    this.dialog.open(EditProfileComponent)
  }
  onChangeProfileImage(event) {
    this.changeImageLoader = true;
    if (event.target.files && event.target.files.length) {
      this.profileService.updateUserImage(event.target.files[0]).subscribe(
        (res) => {
          this.accountStore.setAccountInfo({ ...this.accountStore.getAccountInfo(), picture: res.imageURL })
        },
        (error) => {
          this.changeImageLoader = false;
        },
        () => {
          this.changeImageLoader = false;
        })
    }
  }
}
