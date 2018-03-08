import { TestBed, inject } from '@angular/core/testing';

import { TotimService } from './totim.service';

describe('TotimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotimService]
    });
  });

  it('should be created', inject([TotimService], (service: TotimService) => {
    expect(service).toBeTruthy();
  }));
});
