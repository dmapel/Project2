import { TestBed, inject } from '@angular/core/testing';

import { NewPageService } from './new-page.service';

describe('NewPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPageService]
    });
  });

  it('should be created', inject([NewPageService], (service: NewPageService) => {
    expect(service).toBeTruthy();
  }));
});
