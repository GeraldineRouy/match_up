<script>

import PlayerInput from "@/components/PlayerInput.vue";
import PlayersList from "@/components/PlayersList.vue";
import StartTournamentButton from "@/components/StartTournamentButton.vue";

export default {
  components: {
    PlayerInput,
    PlayersList,
    StartTournamentButton
  },
  data() {
    return {
      players: []
    };
  },
  methods: {
    addPlayer(name) {
      this.players.push(name);
    },
    startTournament() {
      console.log("Tournament started with following players :", this.players);
    }
  }
}
</script>

<template>

  <div class="min-h-screen bg-gray-50 flex items-center justify-center">

    <div class="bg-white p-8 rounded-lg">

      <h1 class="text-3xl font-bold text-primary text-center mb-6">MatchUp</h1>

      <PlayerInput @add-player="addPlayer" />
      <PlayersList :players="players" />
      <StartTournamentButton @start-tournament="startTournament" />

    </div>

  </div>



</template>

<style scoped>

</style>