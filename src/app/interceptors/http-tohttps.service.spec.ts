import { TestBed } from '@angular/core/testing';

import { HttpTohttpsService } from './http-tohttps.service';

describe('HttpTohttpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTohttpsService = TestBed.get(HttpTohttpsService);
    expect(service).toBeTruthy();
  });
});
