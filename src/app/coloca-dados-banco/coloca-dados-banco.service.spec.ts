import { TestBed, inject } from '@angular/core/testing';

import { ColocaDadosBancoService } from './coloca-dados-banco.service';

describe('ColocaDadosBancoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColocaDadosBancoService]
    });
  });

  it('should be created', inject([ColocaDadosBancoService], (service: ColocaDadosBancoService) => {
    expect(service).toBeTruthy();
  }));
});
