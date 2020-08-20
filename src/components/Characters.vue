<template>
  <div>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <router-link :to="{name: 'Character', params: {id: character.id } }">{{ character.name }}</router-link>
      </li>
    </ul>
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