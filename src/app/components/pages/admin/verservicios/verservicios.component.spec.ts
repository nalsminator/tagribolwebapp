import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerserviciosComponent } from './verservicios.component';

describe('VerserviciosComponent', () => {
  let component: VerserviciosComponent;
  let fixture: ComponentFixture<VerserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
