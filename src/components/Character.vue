<template>
  <div>
    <h3>This is a Marvel Character</h3>
    <p>{{ this.$route.params.id }}</p>
    <ul>
      <li v-for="char in character" :key="char.id">
        {{ char.name }}
        {{ char.modified }}
        {{ char.description }}
      </li>
    </ul>

    <img :src="url" alt="" srcset="">
  </div>
</template>

<script>
import { marvel_public_key } from '../marvel';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Character',
  mounted() {
    this.$store.dispatch('getCharacter', this.$route.params.id);
  },
  computed: {
    ...mapState({
      character: state => state.character,
      url: state => state.url
    })
  },
}
</script>

<style>

</style>