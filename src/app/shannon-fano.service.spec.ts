import { TestBed } from '@angular/core/testing';

import { ShannonFanoService } from './shannon-fano.service';

describe('ShannonFanoService', () => {
  let service: ShannonFanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShannonFanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
