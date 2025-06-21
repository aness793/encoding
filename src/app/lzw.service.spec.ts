import { TestBed } from '@angular/core/testing';

import { LZWService } from './lzw.service';

describe('LZWService', () => {
  let service: LZWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LZWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
