import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {Router} from '@angular/router';
import {SnotifyService} from 'ng-snotify';
import {ClipboardService} from 'ngx-clipboard';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-save-backup-key-two-fa',
  templateUrl: './save-backup-key-two-fa.component.html',
  styleUrls: ['./save-backup-key-two-fa.component.css']
})
export class SaveBackupKeyTwoFaComponent implements OnInit {

  @ViewChild('content') modal;
  backupCode = 'MGK34FC0O12DF7TE';

  constructor(
    public popupService: PopupService,
    private router: Router,
    private clipboardService: ClipboardService,
    private snotifyService: SnotifyService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  copyCode() {
    if (this.clipboardService.copyFromContent(this.backupCode)) {
      this.snotifyService.simple('Code copied.');
    }
  }

  back() {
    this.sharedService.showModalOverview();
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile', {outlets: {popup: 'scan-qr-code'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

  next() {
    this.sharedService.showModalOverview();
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/settings/profile', {outlets: {popup: 'enable-two-fa'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
