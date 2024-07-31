import { TestBed } from '@angular/core/testing';

import { MeisterschaftserviceService } from './meisterschaftservice.service';

describe('MeisterschaftserviceService', () => {
  let service: MeisterschaftserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeisterschaftserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
