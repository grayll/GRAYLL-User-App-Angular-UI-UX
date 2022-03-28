import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { SnotifyService } from 'ng-snotify';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/user.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {

  federationAddress: string;
  nearAddress: string;

  faCheck = faCheck;
  faExclamation = faExclamation;

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  }
  userCollection: AngularFirestoreCollection<any>;

  constructor(
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private afs: AngularFirestore,
  ) {
    this.userCollection = afs.collection<any>('user');
    this.federationAddress = 'grayll3*grayll.io';
    this.nearAddress = 'DKJNSFUIHLJ238OHUIDLFJN23023OHUIFSDKJNS032P3DSKJAFNLSD';
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && Object.keys(userData).length) {
      Object.keys(this.userData).map(prop => {
        this.userData[prop] = userData[prop] ? userData[prop] : "";
      });
    }

  }

  copyFederationAddress() {
    if (this.clipboardService.copyFromContent(this.federationAddress)) {
      this.snotifyService.simple('Federation address copied.');
    }
  }

  copyXRPAddress() {
    if (this.clipboardService.copyFromContent(this.nearAddress)) {
      this.snotifyService.simple('XRP address copied.');
    }
  }

  save() {
    // console.log(this.userData);
    // this.userCollection.add(this.userData);
    this.snotifyService.simple('Your changes are saved.');
  }

  onChange(property) {
    let localData = localStorage.getItem('userData');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('userData', JSON.stringify({ ...parsedLocalData, [property]: this.userData[property] }));
    } else {
      localStorage.setItem('userData', JSON.stringify({ [property]: this.userData[property] }));
    }

  }

}
