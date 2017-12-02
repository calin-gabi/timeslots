import { ISlotDay } from './slots';

export interface ISlotDay {
    date: Date;
    slots: ISlot[];
}

export interface ISlot {
    id: string;
    startTime: string;
    endTime: string;
    available: boolean;
    reserved: boolean;
}

export class SlotDay implements ISlotDay {
    public date: Date;
    public slots: Slot[];

    constructor(elem: any) {
        this.date = new Date(elem.date);
        this.slots = elem.slots;
    }
}

export class Slot implements ISlot {
    public id: string;
    public startTime: string;
    public endTime: string;
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
