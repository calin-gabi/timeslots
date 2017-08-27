import { NgRedux } from '@angular-redux/store';
import { SlotsModule } from './slots/slots.module';
import { SlotsActions } from './slots/slots.actions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
