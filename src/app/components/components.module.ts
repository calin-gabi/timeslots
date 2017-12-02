import { NgRedux } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlotsActions } from './slots/slots.actions';
import { SlotsModule } from './slots/slots.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    SlotsModule
  ],
  providers: [SlotsActions],
  exports: [SlotsModule]
})
export class ComponentsModule { }
