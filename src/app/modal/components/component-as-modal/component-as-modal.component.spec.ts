import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAsModalComponent } from './component-as-modal.component';

describe('ComponentAsModalComponent', () => {
  let component: ComponentAsModalComponent;
  let fixture: ComponentFixture<ComponentAsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
