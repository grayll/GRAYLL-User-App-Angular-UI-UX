import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate) {
    
    this.swUpdate.available.subscribe(evt => {
      //an update is available, add some logic here.
      console.log('Current version is', evt.current);
      console.log('Available version is', evt.available);
      console.log("Update available");
    });
    if (!this.swUpdate.isEnabled) {

      console.log('There is no new version.');

    }
    this.swUpdate.activated.subscribe(event => {
      console.log('Old version was', event.previous);
      console.log('New version is', event.current);
    });
    console.log("Update service is activated.");
    this.swUpdate.checkForUpdate();
  }
}
