import create from 'zustand'

const useCategorias = create(set => ({
  categorias: [],
  increment: ( categoria ) => set(state => ({ categorias: [...state.categorias, categoria] })),
}));

export default useCategorias;