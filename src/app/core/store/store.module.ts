import { SlotsReducer, ISlotsStore } from './slots.reducer';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createLogger } from 'redux-logger';

declare var require: any;

const PERSIST_STATE = require('redux-localstorage');

export interface IAppState {
  slots?: ISlotsStore;
}

export const ROOT_REDUCER = combineReducers<IAppState> ({
  slots: SlotsReducer
});

export const ENHANCERS = [
PERSIST_STATE('counter', { key: '@angular-redux/store/examples/counter' })
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
      [ createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
