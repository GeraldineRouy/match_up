<script>
export default {
  name: "Match",
  props: {
    players: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
<div class="mb-4 text-secondary">
  <h3 class="text-primary text-l font-bold">Match </h3>
  <div class="ml-6">
    <p>{{ players[0] }}</p>
    <p>VS</p>
    <p>{{ players[1] || "no player found !" }}</p>
  </div>
</div>
</template>

<style scoped>

</style>