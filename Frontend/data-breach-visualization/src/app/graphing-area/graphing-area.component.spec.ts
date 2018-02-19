import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphingAreaComponent } from './graphing-area.component';

describe('GraphingAreaComponent', () => {
  let component: GraphingAreaComponent;
  let fixture: ComponentFixture<GraphingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
