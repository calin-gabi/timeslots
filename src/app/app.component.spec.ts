import { PubNubAngular } from 'pubnub-angular2';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { SlotsService } from './components/slots/slots.service';
import { NgRedux } from '@angular-redux/store';
import { SlotsActions } from './components/slots/slots.actions';
import { SlotsComponent } from './components/slots/slots.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AbstractMockObservableService } from './core/abstract-mock-observable.spec';


class MockService extends AbstractMockObservableService {
  getSlots() {
    return this;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    const mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SlotsComponent
      ],
      imports: [HttpModule],
      providers: [SlotsActions, NgRedux, {provide: SlotsService, useValue: mockService}, PubNubAngular]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to timeslots!');
  }));
});
