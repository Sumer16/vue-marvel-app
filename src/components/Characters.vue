<template>
  <div>
    <h3 v-on:click="getCharacters">{{ msg }}</h3>
    <ul>
      <li v-for="character in characters" :key="character.name">{{ character.name }}</li>
    </ul>
  </div>
</template>

<script>
import { marvel_secret_key, marvel_public_key} from '../marvel';
import axios from 'axios';

export default {
  name: 'Characters',
  data() {
    return {
      characters: []
    }
  },
  props: {
    msg: String
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${marvel_public_key}`)
      .then(res => {
        res.data.data.results.forEach((item) => {
          console.log(item);
          this.characters.push(item);
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>