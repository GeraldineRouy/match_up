<script>


export default {

  data() {
    return {
      matchesForNextRound: JSON.parse(this.$route.query.firstRound || "[]"),
    };
  },
  methods: {
    getColorClass(index) {
      const colors = ["bg-mumauve", "bg-muelectric"];
      return colors[index];
    }
  }
};

</script>

<template>

  <div class="p-4">

    <h1 class="text-2xl font-bold text-primary mb-4">Tournament tree : First Round</h1>

    <div v-if="matchesForNextRound.length">

      <div v-for="(matches, matchIndex) in matchesForNextRound" :key="matchIndex" class="mb-8">

        <h2 class="text-lg font-semibold text-secondary">Match {{ matchIndex+ 1 }}</h2>

        <div class="space-y-2">
          <p
              v-for="(player, index) in matches"
             :class="getColorClass(index)"
             class="space-y-2 px-2 text-white"
          >
            {{ player }}
          </p>
        </div>

      </div>
    </div>

    <div v-else>

      <p class="text-warning font-bold">Uh oh, no tournament created. Please go back to add players and create a new tournament.</p>

    </div>

    <RouterLink :to="{ name: 'Home' }" class="text-secondary">Return Home</RouterLink>

  </div>


</template>

<style scoped>

</style>