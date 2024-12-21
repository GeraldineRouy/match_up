<script>


import PlayerInput from "@/components/PlayerInput.vue";
import PlayersList from "@/components/PlayersList.vue";
import StartTournamentButton from "@/components/StartTournamentButton.vue";
import { generateNextRound } from "@/utils/tournament.js";

export default {
  components: {
    PlayerInput,
    PlayersList,
    StartTournamentButton
  },
  data() {
    return {
      playersArray: [],
      firstRound: {}
    };
  },
  methods: {
    addPlayer(name) {
      console.log("Adding player by Home :", name);
      this.playersArray.push(name);
    },
    handleStartTournament() {
      console.log("Players :", this.playersArray);
      if (this.playersArray.length < 2) {
        alert("Please add at least 2 players to start a new tournament.");
        return;
      }

      this.firstRound = generateNextRound(this.playersArray);
      console.log("First Round created :", this.firstRound);
      // this.$router.push({
      //   name: "TournamentTree",
      //   query: { firstRound: JSON.stringify(this.firstRound) }
      // })
    }
  }
};
</script>

<template>

  <div class="min-h-screen bg-gray-50 flex items-center justify-center">

    <div class="bg-white p-8 rounded-lg">

      <h1 class="text-3xl font-bold text-primary text-center mb-6">MatchUp</h1>

      <PlayerInput @add-player="addPlayer" />
      <PlayersList :players="playersArray" />
      <StartTournamentButton @start-tournament="handleStartTournament" />

    </div>

  </div>



</template>

<style scoped>

</style>