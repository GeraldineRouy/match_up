<script>

import {defineComponent} from "vue";
import PlayersList from "@/components/PlayersList.vue";
import StartTournamentButton from "@/components/StartTournamentButton.vue";
import PlayerInput from "@/components/PlayerInput.vue";
import {generateNextRound} from "@/utils/tournament.js";

export default {
  name: "GetStarted",
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
    }
  }
};

// defineComponent({
//   components: {PlayerInput, StartTournamentButton, PlayersList}
// })
</script>

<template>


  <PlayerInput @add-player="addPlayer" />
  <PlayersList :players="playersArray" />
  <StartTournamentButton @start-tournament="handleStartTournament" />

</template>

<style scoped>

</style>