import { TestBed } from '@angular/core/testing';

import { AdmindishService } from './admindish.service';

describe('AdmindishService', () => {
  let service: AdmindishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
