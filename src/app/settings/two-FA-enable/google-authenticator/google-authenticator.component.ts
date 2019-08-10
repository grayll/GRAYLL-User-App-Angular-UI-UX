import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-two-factor-enable',
  templateUrl: './google-authenticator.component.html',
  styleUrls: ['./google-authenticator.component.css']
})
export class GoogleAuthenticatorComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  next() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile', {outlets: {popup: 'scan-qr-code'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
