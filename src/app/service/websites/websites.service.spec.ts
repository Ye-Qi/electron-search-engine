import { TestBed, inject } from '@angular/core/testing';

import { WebsitesService } from './websites.service';

describe('WebsitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsitesService]
    });
  });

  it('should be created', inject([WebsitesService], (service: WebsitesService) => {
    expect(service).toBeTruthy();
  }));
});
