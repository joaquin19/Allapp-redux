import * as fromFiltro from './filter.action';


const estadoInicial: fromFiltro.filtroValidos = 'todos';

export function filtroReducer(state = estadoInicial,
                              action: fromFiltro.acciones): fromFiltro.filtroValidos {

      switch (action.type) {
        case fromFiltro.SET_FILTRO:
          return action.filtro;

        default:
          return  state;
      }
}
