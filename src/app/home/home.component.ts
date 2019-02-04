import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://localhost:42000/src/asserts/img?random&t=${Math.random()}`);

  constructor(private config:NgbCarouselConfig) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit() {
  }

}
