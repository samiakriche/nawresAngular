import { TestBed } from '@angular/core/testing';

import { SocietesService } from './societe.service';

describe('SocieteService', () => {
  let service: SocietesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
