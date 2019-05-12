import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setIndicator(indicator) {
    sessionStorage.setItem('indicator', indicator);
    console.log(indicator);
  }

}
