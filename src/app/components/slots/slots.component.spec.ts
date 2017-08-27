import { PubNubAngular } from 'pubnub-angular2';
import { SlotsService } from './slots.service';
import { NgRedux } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
import { SlotsActions } from './slots.actions';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlotsComponent } from './slots.component';
import { AbstractMockObservableService } from './../../core/abstract-mock-observable.spec';

class MockService extends AbstractMockObservableService {
  getSlots() {
    return this;
  }
}

describe('SlotsComponent', () => {
  let component: SlotsComponent;
  let fixture: ComponentFixture<SlotsComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    const mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [ SlotsComponent ],
      imports: [HttpModule],
      providers: [SlotsActions, NgRedux, {provide: SlotsService, useValue: mockService}, PubNubAngular]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', inject([SlotsService], (slotsService: MockService) => {
    expect(component).toBeTruthy();
  }));
});
