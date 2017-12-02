import { NgRedux } from '@angular-redux/store';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';
import { AbstractMockObservableService } from './../../core/abstract-mock-observable.spec';
import { SlotsActions } from './slots.actions';
import { SlotsComponent } from './slots.component';
import { SlotsService } from './slots.service';

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
