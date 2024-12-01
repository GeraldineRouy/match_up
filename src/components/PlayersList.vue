<script>

export default {
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  methods: {
    getColorClass(index) {
      const colors = ["bg-mumauve", "bg-muviolet2", "bg-muelectric"];
      return colors[index % colors.length];
    }
  }
};

</script>

<template>

  <div>
    <h2 class="text-lg font-semibold text-secondary mb-4">Players</h2>
    <ul class="space-y-2">
      <li
          v-for="(player, index) in players"
          :key="index"
          :class="getColorClass(index)"
          class="px-4 py-2 rounded text-white"
      >
        {{ player }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>