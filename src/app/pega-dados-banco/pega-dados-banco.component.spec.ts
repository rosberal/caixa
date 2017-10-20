import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegaDadosBancoComponent } from './pega-dados-banco.component';

describe('PegaDadosBancoComponent', () => {
  let component: PegaDadosBancoComponent;
  let fixture: ComponentFixture<PegaDadosBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegaDadosBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegaDadosBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
