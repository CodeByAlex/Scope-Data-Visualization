import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  isIn = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.isIn = this.isIn === false ? true : false;
  }

  closeNav() {
    this.isIn = false;
  }
}
