import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SlotsService {

    constructor(
        private _apiHttp: Http
    ) {}

    public getSlots() {
        return this._apiHttp.get('assets/slots.json');
    }
}
