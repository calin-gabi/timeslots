import { PubNubAngular } from 'pubnub-angular2';
import { SlotsService } from './slots.service';
import { IAppState } from './../../core/store/store.module';
import { NgRedux } from '@angular-redux/store';
import { SlotsActions } from './slots.actions';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { SlotDay, ISlotDay, Slot, ISlot } from './../../components/slots/slots';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./slots.component.scss']
})

export class SlotsComponent implements OnInit {
  public slotDays: Array<ISlotDay>;
  public currentSlot: ISlot;

  @select(['slots', 'SlotDays'])
  private _slotDays$: Observable<any>;

  private _channel = 'carchat';

  constructor(
    private _slotsActions: SlotsActions,
    private _slotsService: SlotsService,
    private _pubNub: PubNubAngular,
    private _ngRedux: NgRedux<IAppState>
  ) {
    if (this._slotDays$) {
      this._slotDays$.subscribe((slotDays) => { this.slotDays = slotDays; });
    }
    if (_pubNub) {
      _pubNub.init({
        publishKey: 'pub-c-d02764da-0013-4ccd-80ba-1ecb2e1bd74a',
        subscribeKey: 'sub-c-8ab5f098-88b0-11e7-a576-2a15881e5abd'
      });
      _pubNub.subscribe({
        channels: [this._channel],
        triggerEvents: ['message']
      });
      _pubNub.getMessage(this._channel, function(res) {
        const slot = JSON.parse(res.message.slot);
        _slotsActions.saveSlot(slot);
      });
    }
  }


  public selectSlot(slot: ISlot) {
    if (slot.available) {
      this.currentSlot = slot;
      this.currentSlot.reserved = true;
      this._slotsActions.saveSlot(this.currentSlot);
      this._pubNub.publish(
          {
              message: {slot: JSON.stringify(this.currentSlot)},
              channel: this._channel
          },
          (status, response) => {
              if (status.error) {
                  console.log(status);
              } else {
                  console.log('message Published w/ timetoken', response.timetoken);
              }
          });
    } else {
      alert('slot unavailable');
    }
  }

  public submit() {
    console.log('submit');
    this.currentSlot.available = false;
    this.currentSlot.reserved = false;
    this._slotsActions.saveSlot(this.currentSlot);
    this._pubNub.publish(
        {
            message: {slot: JSON.stringify(this.currentSlot)},
            channel: this._channel
        },
        (status, response) => {
            if (status.error) {
                console.log(status);
            } else {
                console.log('message Published w/ timetoken', response.timetoken);
            }
        });
    this.currentSlot = null;
  }

  ngOnInit() {
    this._slotsService.getSlots().subscribe(
      (res) => {
        const slotsRaw = res.json();
        const slotDays: Array<SlotDay> = [];
        for (let i = 0; i < slotsRaw.length; i++) {
          const slotRaw = slotsRaw[i];
          const slotDay = new Date(slotRaw.startTime.substring(0, 10));
          const currentDayIdx = slotDays.findIndex((elem) => {
            return elem.date.toString() === slotDay.toString();
          });
          if (currentDayIdx > -1) {
            const currentDay: SlotDay = slotDays[currentDayIdx];
            const slot = new Slot(slotRaw);
            currentDay.slots.push(slot);
          } else {
            const slot = new Slot(slotRaw);
            const currentDay = new SlotDay({date: slotDay, slots: [slot]});
            slotDays.push(currentDay);
          }
        }
        this._slotsActions.saveSlots(slotDays);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
