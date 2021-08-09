import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../../popup/popup.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cancel-algo-positions',
  templateUrl: './cancel-algo-positions.component.html',
  styleUrls: ['./cancel-algo-positions.component.css']
})
export class CancelAlgoPositionsComponent implements OnInit {

  @ViewChild('content') modal;
  algoName: any = '';
  constructor(
    public popupService: PopupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.popupService.open(this.modal);
    this.route.params.subscribe((param) => {
      let params = param.name;
      let index = params.indexOf("Po") + 9;
      this.algoName = params.substring(index, params.length);

      // let split = param.name.split('|');
      // this.algoName = split[1].trim() || "";
    });
  }

}
