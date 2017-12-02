import { routerReducer } from '@angular-redux/router';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import PERSIST_STATE from 'redux-localstorage';
import { createLogger } from 'redux-logger';
import { ISlotsStore, SlotsReducer } from './slots.reducer';
// const PERSIST_STATE = require('redux-localstorage');

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
