import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { AppModel } from './app.model';

export class AppStateModel {
  // todo: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    todo: ''
  }
})
@Injectable()
export class AppState {}