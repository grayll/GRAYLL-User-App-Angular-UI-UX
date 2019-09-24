import {Component, OnDestroy, OnInit} from '@angular/core';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {UserModel} from '../models/user.model';
import {UserService} from '../authorization/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  user: UserModel;

  // Font Awesome Icons
  faWarning = faExclamationTriangle;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    public sharedService: SharedService
  ) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.changeBackgroundColor(true);
    this.showActivationPopup();
  }

  ngOnDestroy(): void {
    this.changeBackgroundColor(false);
  }

  private changeBackgroundColor(addClass: boolean) {
    const body = document.getElementsByTagName('body')[0];
    addClass ? body.classList.add('dark-navy-background') : body.classList.remove('dark-navy-background');
  }

  private showActivationPopup() {
    setTimeout(() => {
      if (!this.user.isAccountActivated) {
        this.router.navigate([{outlets: {popup: 'activate-account'}}], {relativeTo: this.route});
      }
    }, 1000);
  }
}
