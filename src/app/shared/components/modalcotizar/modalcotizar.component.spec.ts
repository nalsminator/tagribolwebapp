import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcotizarComponent } from './modalcotizar.component';

describe('ModalcotizarComponent', () => {
  let component: ModalcotizarComponent;
  let fixture: ComponentFixture<ModalcotizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcotizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
