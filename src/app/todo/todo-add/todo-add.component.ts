import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtImput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtImput = new FormControl('', Validators.required);
  }

  agregateTodo() {
    if (this.txtImput.invalid) {
      return;
    }

    const accion = new fromTodo.AgregarTodoAction(this.txtImput.value);
    this.store.dispatch(accion);

    this.txtImput.setValue('');
  }

}
