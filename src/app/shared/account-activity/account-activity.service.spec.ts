import { TestBed } from '@angular/core/testing';

import { AccountActivityService } from './account-activity.service';

describe('AccountActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountActivityService = TestBed.get(AccountActivityService);
    expect(service).toBeTruthy();
  });
});
