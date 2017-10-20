import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocaDadosBancoComponent } from './coloca-dados-banco.component';

describe('ColocaDadosBancoComponent', () => {
  let component: ColocaDadosBancoComponent;
  let fixture: ComponentFixture<ColocaDadosBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColocaDadosBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocaDadosBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
