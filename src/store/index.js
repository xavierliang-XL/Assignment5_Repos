import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "23b3a0cee96fcac58b28918686474f75",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {w
          id: movie.id,
          poster: movie.poster_path,
        }
      });
    },
  }
});