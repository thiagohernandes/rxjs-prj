import { TestBed, inject } from '@angular/core/testing';

import { HttpFakeService } from './http-fake.service';

describe('HttpFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpFakeService]
    });
  });

  it('should be created', inject([HttpFakeService], (service: HttpFakeService) => {
    expect(service).toBeTruthy();
  }));
});
