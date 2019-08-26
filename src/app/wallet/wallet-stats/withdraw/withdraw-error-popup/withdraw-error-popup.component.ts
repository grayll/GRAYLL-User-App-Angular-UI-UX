import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../../shared/popup/popup.service';
import {SharedService} from '../../../../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-withdraw-error-popup',
  templateUrl: './withdraw-error-popup.component.html',
  styleUrls: ['./withdraw-error-popup.component.scss']
})
export class WithdrawErrorPopupComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    private popupService: PopupService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  review() {
    this.sharedService.showModalOverview();
    this.popupService.close()
    .then(() => {
      setTimeout(() => {
        this.router.navigate(['/wallet/overview', {outlets: {popup: 'review-withdraw'}}]);
      }, 50);
    })
    .catch((error) => console.log(error));
  }

}
