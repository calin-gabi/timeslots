import { ISlotDay } from './slots';

export interface ISlotDay {
    date: Date;
    slots: Array<ISlot>;
}

export interface ISlot {
    id: String;
    startTime: String;
    endTime: String;
    available: boolean;
    reserved: boolean;
}

export class SlotDay implements ISlotDay {
    public date: Date;
    public slots: Array<ISlot>;

    constructor(elem: any) {
        this.date = new Date(elem.date);
        this.slots = elem.slots;
    }
}

export class Slot implements ISlot {
    public id: String;
    public startTime: String;
    public endTime: String;
    public available: boolean;
    public reserved: boolean;

    constructor(elem: any) {
        this.id = elem.id;
        this.startTime = elem.startTime;
        this.endTime = elem.endTime;
        this.available = elem.available;
        this.reserved = false;
    }
}
