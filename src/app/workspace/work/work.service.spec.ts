/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkService } from './work.service';

describe('Service: Work', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkService]
    });
  });

  it('should ...', inject([WorkService], (service: WorkService) => {
    expect(service).toBeTruthy();
  }));
});