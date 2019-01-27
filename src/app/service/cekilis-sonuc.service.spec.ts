import { TestBed } from '@angular/core/testing';

import { CekilisSonucService } from './cekilis-sonuc.service';

describe('CekilisSonucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CekilisSonucService = TestBed.get(CekilisSonucService);
    expect(service).toBeTruthy();
  });
});
