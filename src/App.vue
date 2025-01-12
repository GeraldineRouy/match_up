<script>

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

export default {
  components: {
    Home
  }
};

</script>

<template>

<div class="bg-softyellow flex flex-col w-full">

  <footer class="bg-softblue flex flex-col divide-success divide-y text-l text-secondary pt-4 pb-2 px-4">
    <p class="flex self-center text-mumauve">MatchUp! Play with your friends !</p>
    <div class="flex justify-around">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </footer>



  <main class="min-h-screen flex flex-col items-center">

    <h1 class="text-3xl font-bold text-primary text-center my-6">MatchUp!</h1>

    <div class="flex flex-col w-3/5 bg-white px-12 py-6 rounded-lg">

    <router-view/>

    </div>

  </main>



</div>
</template>

<style scoped>

</style>
