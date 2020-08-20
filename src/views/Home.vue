<template>
  <div class="home">
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png">
    <Characters msg="Welcome to Your Marvel App in VueJS"/>
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
