import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercotizacionesComponent } from './vercotizaciones.component';

describe('VercotizacionesComponent', () => {
  let component: VercotizacionesComponent;
  let fixture: ComponentFixture<VercotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercotizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
