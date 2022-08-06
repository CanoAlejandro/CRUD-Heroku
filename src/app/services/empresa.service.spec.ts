import { TestBed } from '@angular/core/testing';

import { empresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: empresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(empresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
