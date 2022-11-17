import { createStore, combineReducers } from 'redux';

const initialStateCategoria = { categorias: [] };

const novaCategoria = (state = initialStateCategoria, action) => {
    const valor = action.value
    if(action.type === "increment") {

        return {
            categorias: [...state.categorias, valor]
        }
    }

    return state;
}

const initialStateNota = { notas: [] }

const novaNota = (state = initialStateNota, action) => {
    if(action.type === "incrementNota") {

        return {
            notas: [...state.notas, action.value]
        }
    }

    if(action.type === "deleteNota") {

        return {
            notas: state.notas.filter((n) => n.titulo !== action.value.titulo) 
        }
    }

    return state;
}

const reducers = combineReducers({
    novaCategoria,
    novaNota
})

const store = createStore(reducers);

export default store;