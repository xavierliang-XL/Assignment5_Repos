import { defineStore } from 'pinia'
import axios from 'axios';
import { ref } from 'vue';

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
        }
      });
    },
  }
});

export const isLoggedIn = ref(false);

export const useCart = defineStore('cart', {
  state: () => {
    return {
      purchase: [],
      size: 0,
      unique: [],
    }
  },


  actions: {
    addToCart(id) {
      this.size = this.size + 1;
      this.purchase[this.size-1] = id;
 
    },

    removeFromCart(id) {
      for (let i = 0; i < this.purchase.length; i++) {
        if (id == this.purchase[i]) {
          this.size-=1;
          this.purchase.splice(i,1);
          break;
        }
      }
    },

    clear(){
      this.purchase=[];
      this.size=0;
      this.unique=[];
    }

  }
})