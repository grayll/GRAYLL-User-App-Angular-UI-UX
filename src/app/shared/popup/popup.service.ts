import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    ariaLabelledBy: 'modal-basic-title'
  };

  constructor(private modalService: NgbModal,
              private router: Router) { }

  public open(modal) {
    setTimeout(() => {
      this.modalService.open(modal, this.ngbModalOptions).result.then((result) => {
      }, (reason) => {
      });
    }, 0);
  }

  public async close() {
    setTimeout(() => {
      this.router.navigate([{ outlets: { popup: null } }])
      .then(() => window.history.back());
    }, 0);
    this.modalService.dismissAll();
  }
}
