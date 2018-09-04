import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el Mundo');
const todo3 =  new Todo('Tomar el traje de Ironman');

todo2.completado = true;

const estateInicial: Todo[] = [todo1, todo2, todo3];

export function TodoReducer(state = estateInicial,
                            action: fromTodo.Acciones): Todo[] {

  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    default:
      return state;
  }

}
