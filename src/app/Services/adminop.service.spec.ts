import { TestBed } from '@angular/core/testing';

import { AdminopService } from './adminop.service';

describe('AdminopService', () => {
  let service: AdminopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
