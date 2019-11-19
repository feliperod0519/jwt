import { TestBed } from '@angular/core/testing';

import { InMemoryUsersService } from './inmemoryusers.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryUsersService = TestBed.get(InMemoryUsersService);
    expect(service).toBeTruthy();
  });
});
