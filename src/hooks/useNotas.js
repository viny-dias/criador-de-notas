import create from 'zustand'

const useNotas = create(set => ({
  notas: [],
  increment: ( nota ) => set(state => ({ notas: [...state.notas, nota] })),
  delete: ( titulo ) => set(state => ({ notas: state.notas.filter((n) => n.titulo !== titulo) })),
}));

export default useNotas;