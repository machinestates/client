import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { UserProfileInterface } from 'src/app/types/user/user-profile.interface';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent  implements OnInit {

  @Input() handle: string;
  user: UserProfileInterface

  constructor(private modalController: ModalController, private userService: UserService) { }

  ngOnInit() {
    this.userService.getProfile(this.handle).subscribe((user) => {
      this.user = user;
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
