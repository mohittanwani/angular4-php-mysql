import { TestBed, inject } from '@angular/core/testing';

import { DbOperationsService } from './db-operations.service';

describe('DbOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbOperationsService]
    });
  });

  it('should be created', inject([DbOperationsService], (service: DbOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
