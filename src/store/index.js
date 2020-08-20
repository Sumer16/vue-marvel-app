import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { marvel_public_key } from '../marvel';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    url: '',
    size: 'standard_large.jpg'
  },
  mutations: {
    getCharacters(state) {
      state.characters = [];
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${marvel_public_key}`)
      .then(res => {
        res.data.data.results.forEach((item) => {
          console.log(item);
          state.characters.push(item)
        })
      })
      .catch(err => {
        console.log(err);
      })
    },
    getCharacter(state, characterId) {
      state.character = [];
      axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${marvel_public_key}`)
      .then(res => {
        console.log(res);
        res.data.data.results.forEach((attr) => {
          state.character.push(attr);
          state.url = `${attr.thumbnail.path}/${state.size}`
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  actions: {
    getCharacters(vuexContext) {
      vuexContext.commit('getCharacters');
    },
    getCharacter(vuexContext, id) {
      vuexContext.commit('getCharacter', id);
    }
  },
  modules: {
  }
})
