import {Component, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../../shared/popup/popup.service';

@Component({
  selector: 'app-open-algo-position-error',
  templateUrl: './open-algo-position-error.component.html',
  styleUrls: ['./open-algo-position-error.component.scss']
})
export class OpenAlgoPositionErrorComponent implements OnInit {

  @ViewChild('content') modal;

  constructor(
    public popupService: PopupService
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
  }

}
