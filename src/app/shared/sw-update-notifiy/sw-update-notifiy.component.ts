import { Component, OnInit } from '@angular/core';
import { SwUpdateNotifyService } from './sw-update-notify.service';

@Component({
  selector: 'app-sw-update-notifiy',
  templateUrl: './sw-update-notifiy.component.html',
  styleUrls: ['./sw-update-notifiy.component.css']
})
export class SwUpdateNotifiyComponent implements OnInit {

  get isNotify(){
    return this.swNotify.isNotify;
  }
  constructor(private swNotify: SwUpdateNotifyService) { }

  ngOnInit() {
  }

  close(){
    this.swNotify.hide();
  }

}
