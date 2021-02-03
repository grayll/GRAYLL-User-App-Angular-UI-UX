import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { UpdateService } from './update.service';
import { SwPush } from '@angular/service-worker';
import { AlgoliaService } from './algolia.service';
import { LoadingService } from './_services/loading.service';
import { SwUpdateNotifyService } from './shared/sw-update-notifiy/sw-update-notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code';

  readonly VAPID_PUBLIC_KEY = "BP_Y_xZHh6emSfmOGcQs-Dux8pPmvf5Oa5Vv1iIQ3FoS3cE0HKk5_xibZ2nQkCUbG51P_RDHOBDUgS-vxI4j-Gk";

  ngOnInit() {
    // Get the instance of the Intercom and insert the logged in user info, we will insert the user email
    // dynamically after we complete the user login or sign up flow.
    let authData = JSON.parse(localStorage.getItem('authData'))
    if (authData) {
      (<any>window).Intercom('boot', {
        email: authData.email,
      });
    }
  }

  constructor(private swNotify: SwUpdateNotifyService, private algolia: AlgoliaService, public sharedService: SharedService, private update: UpdateService, private swPush: SwPush, private loadingService: LoadingService) {
    this.algolia.init();
    this.subscribeToNotifications();
    this.loadingService.show();
    setTimeout(() => this.loadingService.hide(), 3500);
    setTimeout(() => this.swNotify.show(), 5000);
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        console.log("Subscribed ", sub);
        //this.newsletterService.addPushSubscriber(sub).subscribe();
      }
      )
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
