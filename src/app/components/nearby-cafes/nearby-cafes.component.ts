import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby-cafes',
  templateUrl: './nearby-cafes.component.html',
  styleUrls: ['./nearby-cafes.component.scss']
})
export class NearbyCafesComponent implements OnInit {

  show1 = true;
  show2 = false;

  constructor() { }

  ngOnInit() {
  }

  onArrowClick() {
    this. show1 = !this.show1;
    this. show2 = !this.show2;
  }

}
