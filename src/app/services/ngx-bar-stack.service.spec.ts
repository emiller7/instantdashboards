import { TestBed } from '@angular/core/testing';

import { NgxBarStackService } from './ngx-bar-stack.service';

describe('NgxBarStackService', () => {
  let service: NgxBarStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBarStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
