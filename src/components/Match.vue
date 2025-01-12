<script>
export default {
  name: "Match",
  props: ['matchNumber']
}
</script>

<template>
<div class="mb-4 text-secondary">
  <h3 class="text-primary text-l font-bold">Match n°{{ matchNumber }}</h3>
  <div class="ml-6">
    <p>Player 1</p>
    <p>VS</p>
    <p>Player 2</p>
  </div>
</div>
</template>

<style scoped>

</style>