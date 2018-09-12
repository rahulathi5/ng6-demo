import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonViewComponent } from './polygon-view.component';

describe('PolygonViewComponent', () => {
  let component: PolygonViewComponent;
  let fixture: ComponentFixture<PolygonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
