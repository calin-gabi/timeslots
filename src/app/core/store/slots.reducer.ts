import { SlotsActions } from './../../components/slots/slots.actions';
import { SlotDay, ISlotDay, Slot, ISlot } from './../../components/slots/slots';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRouteSnapshot } from '@angular/router';

export interface ISlotsStore {
    SlotDays: Array<ISlotDay>;
}

export const INITIAL_STATE: ISlotsStore = {
    SlotDays: []
};

export function SlotsReducer(state: ISlotsStore = INITIAL_STATE,
                             action: any): ISlotsStore {
    switch (action.type) {
        case SlotsActions.SAVE_SLOTS:
            return { ...state, SlotDays: action.payload};
        case SlotsActions.SAVE_SLOT:
            const rec: ISlot = action.payload.slot;
            const recDay = rec.startTime.toString().substring(0 , 10);
            const dayIdx = state.SlotDays.findIndex((elem) => {
                if (typeof elem.date === 'string') {
                  elem.date = new Date(elem.date);
                }
                return elem.date.toISOString().substring(0 , 10) === recDay;
            });
            if (dayIdx > -1) {
                const slots = state.SlotDays[dayIdx].slots;
                const recId = rec.id;
                const slotIdx = slots.findIndex((elem) => {
                    return elem.id === recId;
                });
                slots.splice(slotIdx, 1, rec);
                const slots_saved = state.SlotDays;
                return { ...state, SlotDays: slots_saved};
            } else {
                return { ...state};
            }
        default:
            return state;
    }
}
