import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmodalComponent } from './allmodal.component';

describe('AllmodalComponent', () => {
  let component: AllmodalComponent;
  let fixture: ComponentFixture<AllmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
