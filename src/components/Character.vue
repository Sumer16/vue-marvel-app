<template>
  <div>
    <div class="font-bold text-2xl text-gray-800 uppercase">
      <h3>Marvel Character</h3>
    </div>
    <div class="font-mono text-lg text-gray-700">
      <p>S.H.I.E.L.D ID: {{ this.$route.params.id }}</p>
    </div>
    <div v-for="char in character" :key="char.id" class="max-w-2xl m-auto mt-8">
      <div class="flex flex-col items-center justify-center">
        <img :src="url" alt="" srcset="">
      </div>
      <div class="flex flex-col items-center">
        <div class="pt-3 pb-1 font-semibold text-md text-gray-800">
          <p>{{ char.name }}</p>
        </div>
        <div class="py-1 font-thin text-sm">
          <p>Last Updated: {{ char.modified }}</p>
        </div>
        <div class="py-3 font-light text-lg font-serif text-gray-700">
          <p v-if="char.description">{{ char.description }}</p>
          <p v-else>Sorry, No information available</p>
        </div>
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