import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { async, inject, TestBed } from '@angular/core/testing';
import { SlotsService } from './slots.service';

describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SlotsService]
    });
  });

  it('should get the slots.json', inject([SlotsService], (service: SlotsService) => {
    expect(service.getSlots()).toBeDefined();
  }));
});
