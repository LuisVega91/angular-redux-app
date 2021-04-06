import { ResetAction } from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }

}
