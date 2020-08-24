<template>
  <div>
    <h1 class="font-bold text-2xl p-6">This is your Marvel VueJS application</h1>
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue'

export default {
  name: 'Home',
  components: {
    Characters
  }
}
</script>
