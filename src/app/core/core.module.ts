import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from './local-storage.service';
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot()
  ],
  exports: [
    StoreModule
  ],
  providers: [ LocalStorageService ],
  declarations: []
})

export class CoreModule { }
