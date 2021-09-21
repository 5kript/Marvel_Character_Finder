import create from 'zustand';
import produce from 'immer';
import axios from 'axios';

// export const immer = (config) => (set, get) =>
//   config((fn) => set(produce(fn)), get);

const store = (set) => ({
  comics: [],
  series: [],
  character: {},
  characters: {},
  fetchCharacters: async (value) => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_BASE_API_URL
      }characters?nameStartsWith=${value}&apikey=${
        import.meta.env.VITE_PUBLIC_API_KEY
      }`
    );
    set({ characters: res.data.data.results });
  },
  fetchSingleCharacter: async (id) => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}characters/${id}?apikey=${
        import.meta.env.VITE_PUBLIC_API_KEY
      }`
    );

    set({ character: res.data.data.results[0] });
  },
});

const [useComicStore] = create(store);

export default useComicStore;
