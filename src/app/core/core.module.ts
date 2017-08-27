import { LocalStorageService } from './local-storage.service';
import { StoreModule } from './store/store.module';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
