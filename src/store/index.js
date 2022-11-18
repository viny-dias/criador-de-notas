import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialStateCategoria = { categorias: [] };

const categoriaSlice = createSlice({
  name: "categoria",
  initialState: initialStateCategoria,
  reducers: {
    increment(state, action) {
      const valor = action.payload;
      state.categorias = [...state.categorias, { id: uuidv4(), value: valor }];
    },
  },
});

const initialStateNota = { notas: [] };

const notaSlice = createSlice({
  name: "nota",
  initialState: initialStateNota,
  reducers: {
    increment(state, action) {
      state.notas = [...state.notas, action.payload];
    },
    delete(state, action) {
      state.notas = state.notas.filter((n) => n.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: { categoria: categoriaSlice.reducer, nota: notaSlice.reducer },
});

export const categoriaActions = categoriaSlice.actions;
export const notaActions = notaSlice.actions;

export default store;
