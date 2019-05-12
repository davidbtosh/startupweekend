import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  indicator: string;
  ok = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const ind = sessionStorage.getItem('indicator');
    console.log(ind);
    if (ind == null) {
      this.indicator = '2';
    } else {
      this.indicator = ind;
    }
    this.ok = true;
  }

executeSelectedChange(event) {
    // console.log(event);
  }

  navigate(route) {
    this.router.navigate(['/' + route]);
  }

}
