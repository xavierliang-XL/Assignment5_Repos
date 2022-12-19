import { defineStore } from 'pinia'
import axios from 'axios';
import {ref} from 'vue';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "23b3a0cee96fcac58b28918686474f75",
          query: "cowboy",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster: movie.poster_path,
          item_count:0,
        }
      });
    },
  }
});

export const isLoggedIn=ref(false);

export const useCart = defineStore('cart',{
  state: () => {
    return {
      purchase:[],
      size:0, 
    }
  },
  actions:{
    addToCart(movie){
      this.purchase[this.size]=movie;
      this.size=this.size+1;
    },

    getItem(index){
      return this.purchase[index];
    }
  }
})