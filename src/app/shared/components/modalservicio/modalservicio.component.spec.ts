import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalservicioComponent } from './modalservicio.component';

describe('ModalservicioComponent', () => {
  let component: ModalservicioComponent;
  let fixture: ComponentFixture<ModalservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
