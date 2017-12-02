import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { SlotsActions } from './slots.actions';
import { SlotsComponent } from './slots.component';
import { SlotsService } from './slots.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
      SlotsActions,
      SlotsService
    ],
  declarations: [SlotsComponent],
  exports: [SlotsComponent]
})

export class SlotsModule {}
