<template>
  <div>
    <div class="font-bold text-2xl text-gray-800 uppercase">
      <h3>Marvel Character</h3>
    </div>
    <div class="">
      <p>S.H.I.E.L.D ID: {{ this.$route.params.id }}</p>
    </div>
    <div v-for="char in character" :key="char.id">
      <div>
        <p>Name: {{ char.name }}</p>
      </div>
      <div>
        <p>Latest Update: {{ char.modified }}</p>
      </div>
      <div>
        <p>Description: {{ char.description }}</p>
      </div>
      <div>
        <img :src="url" alt="" srcset="">
      </div>
    </div>
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