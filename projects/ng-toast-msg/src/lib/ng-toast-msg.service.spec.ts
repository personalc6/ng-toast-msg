import { TestBed } from '@angular/core/testing';

import { NgToastMsgService } from './ng-toast-msg.service';

describe('NgToastMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgToastMsgService = TestBed.get(NgToastMsgService);
    expect(service).toBeTruthy();
  });
});
