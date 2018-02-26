import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('checkbox') checkbox: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  closeSideNavigation() {
    this.checkbox.nativeElement.checked = false;
  }
}
