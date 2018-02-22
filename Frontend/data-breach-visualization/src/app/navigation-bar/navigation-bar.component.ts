import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @ViewChild('checkbox') checkbox:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  closeSideNavigation(){
    this.checkbox.nativeElement.checked = false;
  }
}
