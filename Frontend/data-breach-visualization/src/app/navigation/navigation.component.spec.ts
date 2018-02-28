import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {ElementRef} from "@angular/core";

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports:[
        RouterModule.forRoot([])
      ],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should uncheck a checkbox', ()  => {
    fixture.detectChanges();
    component.checkbox.nativeElement.checked = true;
    component.closeSideNavigation();
    expect(component.checkbox.nativeElement.checked).toEqual(false);

  });
});
