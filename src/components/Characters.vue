<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
import { marvel_secret_key, marvel_public_key} from '../marvel';

export default {
  name: 'Characters',
  props: {
    msg: String
  }
}
</script>

<style>

</style>