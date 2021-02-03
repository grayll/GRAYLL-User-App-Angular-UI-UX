import { Component, OnInit, ViewChild } from '@angular/core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from '../../shared/error/error.service';
import { Router } from '@angular/router';
import { PwaService } from 'src/app/pwa.service';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('content') modal;
  show = true;
  userIcon = faUser;
  keyIcon = faKey;
  loginForm: FormGroup;
  deferredPrompt; // Allows to show the install prompt
  setupButton;
  browserPlatform;
  iosguide: boolean = false;
  safariguide: boolean = false;
  firefoxguide: boolean = false;
  honeypot: any = "";
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ErrorService,
    private router: Router,
    public Pwa: PwaService,
    private popupService: PopupService,
  ) {
    this.initForm();
    this.browserPlatform = this.Pwa.getBrowserPlatform();
    console.log("Current Platform : ", this.browserPlatform);
    const authData = JSON.parse(localStorage.getItem('authData'));
    if (authData && Object.keys(authData).length) {
      this.loginForm.controls.email.setValue(authData['email'] ? authData['email'] : "");
      // this.loginForm['email'] = authData['email'] ? authData['email'] : "";
      // this.loginForm['password'] = authData['password'] ? authData['password'] : "";
    }

    /* ------------- Old Code  -------------
    this.myFunction(x); // Call listener function at run time
    x.addListener(this.myFunction) ;
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      console.log("beforeinstallprompt fired");
      if (this.setupButton == undefined) {
          this.setupButton = document.getElementById("setup_button");
      }
      // Show the setup button
      this.setupButton.style.display = "inline";
      this.setupButton.disabled = false;
  });
    window.addEventListener('appinstalled', (evt) => {
      console.log("appinstalled fired", evt);
  });
      ------------- Old Code  ------------- */
  }
  ngOnInit() {
      // var hours = 24; // Reset when storage is more than 24hours
      // hours*60*60*1000
      // var now = new Date().getTime()
      // var nowString = now.toString();
      // var setupTime = localStorage.getItem('setupTime');
      // if (setupTime == null) {
      //   sessionStorage.setItem('setupTime', nowString)
      // } else {
      //     if((now - Number(setupTime)) > hours*60*60*1000) {
      //       sessionStorage.clear()
      //       sessionStorage.setItem('setupTime', nowString);
      //     }
      // }
      let loginFlag = window.sessionStorage.getItem("loginFlag")
      if(loginFlag == "true"){
        console.log("Already logged in")
      }
      else{
        this.popupService.open(this.modal);
      }
  }
  modalClose(){
    window.sessionStorage.setItem("loginFlag", "true");
    this.popupService.closeAndRedirectTo('');
  }
  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  installPwa(): void {
    //this.Pwa.promptEvent.prompt();
  }

  installApp() {
    // var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    console.log('Device is', this.browserPlatform);
    // if (this.browserPlatform == "iphone" || this.browserPlatform == "safari") {
    if (this.iOS()) {
      console.log('iphone device show guide');
      this.iosguide = true;
      console.log(this.iosguide)
    }
    else if (this.isIpad()) {
      console.log('ipad device show guide');
      this.safariguide = true;
    }
    else {
      console.log('install app');
      this.Pwa.installApp();
    }
    /*else if (this.browserPlatform == "firefox")
      this.firefoxguide = true;*/

    /*// Show the prompt
    this.deferredPrompt.prompt();
    this.setupButton.disabled = true;
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA setup accepted');
                // hide our user interface that shows our A2HS button
                this.setupButton.style.display = 'none';
            } else {
                console.log('PWA setup rejected');
            }
            this.deferredPrompt = null;
        });*/
  }

  iOS() {

    let iDevices = [
      'iPhone Simulator',
      'iPhone',
    ];

    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          return true;
        }
      }

      return false;
    }
  }

  isIpad() {
    let iDevices = [
      'iPad Simulator',
      'iPod Simulator',
      'iPad',
      'iPod',
      'MacIntel'
    ];

    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          return true
        }
      }

      return false;
    }
  }

  private clientValidation() {
    if (!this.email || (this.email && !this.email.value)) {
      this.errorService.handleError(null, 'Please enter your email address.');
      return false;
    }
    if (!this.password || (this.password && !this.password.value)) {
      this.errorService.handleError(null, 'Please enter your password.');
      return false;
    }
    if (!this.errorService.isEmailAddressValid(this.email.value)) {
      this.errorService.handleError(null, 'Please enter a valid email address.');
      return false;
    }
    return true;
  }

  loginClicked() {
    if (!this.clientValidation()) { return; }
    if (this.honeypot) {
      return false;
    }
    this.errorService.clearError();
    this.router.navigate(['/two-factor']);
  }

  closeGuide() {
    if (this.iosguide || this.firefoxguide || this.safariguide) {
      this.iosguide = false; this.firefoxguide = false; this.safariguide = false;
    }
  }

  onChange(property) {
    let localData = localStorage.getItem('authData');
    if (localData) {
      let parsedLocalData = JSON.parse(localData);
      localStorage.setItem('authData', JSON.stringify({ ...parsedLocalData, [property]: this[property].value }));
    } else {
      localStorage.setItem('authData', JSON.stringify({ [property]: this[property].value }));
    }
  }

}
