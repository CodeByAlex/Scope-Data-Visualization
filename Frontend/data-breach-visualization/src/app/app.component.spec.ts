import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavigationComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
