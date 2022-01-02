import { TestBed } from '@angular/core/testing';

import { DashboardDemoService } from './dashboard-demo.service';

describe('DashboardDemoService', () => {
  let service: DashboardDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
