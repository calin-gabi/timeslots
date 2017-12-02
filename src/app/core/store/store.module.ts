import { SlotsReducer, ISlotsStore } from './slots.reducer';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createLogger } from 'redux-logger';
import { routerReducer } from '@angular-redux/router';

declare var require: any;

const PERSIST_STATE = require('redux-localstorage');

export interface IAppState {
  slots?: ISlotsStore;
}

export const ROOT_REDUCER = combineReducers<IAppState> ({
  slots: SlotsReducer,
  router: routerReducer
});

export const ENHANCERS = [
PERSIST_STATE('slots', { key: '@angular-redux/store/slots' })
];

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: []
})

export class StoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
      ]
    };
  }
  constructor(
    public store: NgRedux<IAppState>,
    private _ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    devTool: DevToolsExtension
  ) {
    store.configureStore(
      ROOT_REDUCER,
      {},
      [createLogger()],
      [...ENHANCERS, devTool.isEnabled() ? devTool.enhancer() : (f) => f]);
  }
}
