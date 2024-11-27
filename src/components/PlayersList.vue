<script>

export default {
  props: {
    players: {
      type: Array,
      required: true
    }
  }
};

</script>

<template>

  <div>
    <h3>Players</h3>
    <ul>
      <li v-for="(player, index) in players" :key="index">
        {{ player }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>