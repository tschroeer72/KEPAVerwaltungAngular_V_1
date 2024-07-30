import { TestBed } from '@angular/core/testing';

import { MitgliederserviceService } from './mitgliederservice.service';

describe('MitgliederserviceService', () => {
  let service: MitgliederserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MitgliederserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
