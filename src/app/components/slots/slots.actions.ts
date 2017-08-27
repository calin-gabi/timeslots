import { IAppState } from '../../core/store/store.module';
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

@Injectable()
export class SlotsActions {
    public static readonly SAVE_SLOTS = 'SAVE_SLOTS';
    public static readonly SAVE_SLOT = 'SAVE_SLOT';

    constructor(
        private _ngRedux: NgRedux<IAppState>
    ) {

    }

    public saveSlots(slots: {} ) {
        return this._ngRedux.dispatch({type: SlotsActions.SAVE_SLOTS, payload: slots});
    }

    public saveSlot(slot: {} ) {
        const payload_ = {slot: slot};
        return this._ngRedux.dispatch({type: SlotsActions.SAVE_SLOT, payload: payload_});
    }
}

