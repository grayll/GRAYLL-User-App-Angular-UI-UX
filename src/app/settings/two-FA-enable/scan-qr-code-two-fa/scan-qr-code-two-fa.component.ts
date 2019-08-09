import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scan-qr-code-two-fa',
  templateUrl: './scan-qr-code-two-fa.component.html',
  styleUrls: ['./scan-qr-code-two-fa.component.css']
})
export class ScanQrCodeTwoFaComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  back() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings', {outlets: {popup: 'google-authenticator'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

  next() {
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings', {outlets: {popup: 'save-backup-key'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
