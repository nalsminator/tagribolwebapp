import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycotizacionComponent } from './displaycotizacion.component';

describe('DisplaycotizacionComponent', () => {
  let component: DisplaycotizacionComponent;
  let fixture: ComponentFixture<DisplaycotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
