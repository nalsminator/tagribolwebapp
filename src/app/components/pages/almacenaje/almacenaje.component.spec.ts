import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenajeComponent } from './almacenaje.component';

describe('AlmacenajeComponent', () => {
  let component: AlmacenajeComponent;
  let fixture: ComponentFixture<AlmacenajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
