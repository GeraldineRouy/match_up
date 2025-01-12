<script>
import Match from "@/components/Match.vue";

export default {
  name: 'FirstRound',
  components: {Match},
}

</script>

<template>

  <div class="divide-success divide-y flex flex-col w-full">

    <div>
      <h2 class="mb-2 text-xl font-bold text-secondary text-center">Round n°1</h2>
      <p class="mb-4 text-secondary">Time to play !</p>
    </div>

    <match match-number="1"/>
    <match match-number="2"/>
    <match match-number="3"/>

  </div>


</template>

<style scoped>

</style>