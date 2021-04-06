import { MultiplicarAction, DividirAction } from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const action = new MultiplicarAction(2);
    this.store.dispatch(action)
  }

  dividir() {
    const action = new DividirAction(2);
    this.store.dispatch(action)
  }


}
