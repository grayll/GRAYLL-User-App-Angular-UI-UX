import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  @ViewChild(NgbCarousel) carousel: NgbCarousel;

  constructor() {
  }

  ngOnInit() {
  }

  swipeLeft() {
    this.carousel.prev();
  }

  swipeRight() {
    this.carousel.next();
  }
}
