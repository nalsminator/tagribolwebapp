import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayservicioComponent } from './displayservicio.component';

describe('DisplayservicioComponent', () => {
  let component: DisplayservicioComponent;
  let fixture: ComponentFixture<DisplayservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
