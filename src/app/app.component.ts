import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor( private store: Store<AppState> ){
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    })
  }

  incrementar(){
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decreemntar(){
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }

  cambioContador(contador){
    this.contador = contador;
  }

}
