<script>
import Match from "@/components/Match.vue";
import {useTournamentStore} from "@/store/tournament.js";

export default {
  name: 'FirstRound',
  components: {Match},
  computed: {
    tournamentStore() {
      return useTournamentStore();
    },
    matches() {
      return this.tournamentStore.matches;
    }
  }
};

</script>

<template>

  <div class="divide-success divide-y flex flex-col w-full">

    <div>
      <h2 class="mb-2 text-xl font-bold text-secondary text-center">First Round</h2>
      <p class="mb-4 text-secondary">Time to play !</p>
    </div>

    <div v-if="matches.length">
      <div v-for="(match, index) in matches" :key="index">
        <Match :players="match"/>
      </div>
    </div>
    <div v-else class="text-mupink font-bold">
      <p>No match found, please go back and start a tournament.</p>
    </div>



  </div>


</template>

<style scoped>

</style>