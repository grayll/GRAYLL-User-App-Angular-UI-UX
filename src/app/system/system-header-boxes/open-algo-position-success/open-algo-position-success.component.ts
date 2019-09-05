import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-open-algo-position-success',
  templateUrl: './open-algo-position-success.component.html',
  styleUrls: ['./open-algo-position-success.component.scss']
})
export class OpenAlgoPositionSuccessComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

  goToError() {
    this.popupService.close().then(() => {
      setTimeout(() => {
        this.router.navigate(['/system/overview', {outlets: {popup: 'open-algo-position-error'}}]);
      }, 1000);
    });
  }

}
