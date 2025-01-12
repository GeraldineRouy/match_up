<script>
import GetStarted from "@/views/GetStarted.vue";

export default {
  name: "Home",
  components: {
    GetStarted
  }
}

</script>

<template>

      <p class="text-mumauve">
        Welcome ! <br>
        Blablabla I explain what we do here... <br>

        Call to action to start setting a new tournament !
      </p>

      <router-link to="/get-started" class="flex justify-center text-lg font-semibold text-secondary">Lezgo !!!</router-link>

</template>

<style scoped>

</style>