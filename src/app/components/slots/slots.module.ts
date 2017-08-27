import { Http } from '@angular/http';
import { SlotsService } from './slots.service';
import { SlotsActions } from './slots.actions';
import { SlotsComponent } from './slots.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
