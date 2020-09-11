import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvasesComponent } from './envases.component';

describe('EnvasesComponent', () => {
  let component: EnvasesComponent;
  let fixture: ComponentFixture<EnvasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
