<template>
  <div class="m-auto sm:max-w-sm md:max-w-3xl lg:max-w-6xl py-4">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="h-40 w-64 m-auto flex flex-col items-center justify-around bg-gray-800 rounded-md shadow-lg hover:shadow-2xl" v-for="character in characters" :key="character.name">
        <h1 class="text-lg text-gray-200 bg-transparent whitespace-pre-wrap">{{ character.name }}</h1>
        <router-link :to="{name: 'Character', params: {id: character.id } }" class=" px-4 py-2 border border-gray-200 text-base text-gray-200 bg-transparent hover:bg-gray-400 hover:text-gray-800 rounded-lg">View</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { marvel_secret_key, marvel_public_key} from '../marvel';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Characters',
  mounted() {
    this.$store.dispatch('getCharacters');
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  }
}
</script>

<style>

</style>