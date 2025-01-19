<script>

import PlayersList from "@/components/PlayersList.vue";
import StartTournamentButton from "@/components/StartTournamentButton.vue";
import PlayerInput from "@/components/PlayerInput.vue";
import {generateNextRound} from "@/utils/tournament.js";
import {useTournamentStore} from "@/store/tournament.js";
import FirstRound from "@/views/FirstRound.vue";

export default {
  name: "GetStarted",
  components: {
    PlayerInput,
    PlayersList,
    StartTournamentButton,
    FirstRound
  },
  data() {
    return {
      playerName: "",
      // playersArray: [],
      // firstRound: {}
    };
  },
  computed: {
    tournamentStore() {
      return useTournamentStore();
    },
    players() {
      return this.tournamentStore.players;
    }
  },
  methods: {
    addPlayer(playerName) {
      console.log("Player received in GetStarted:", playerName);
      this.tournamentStore.addPlayer(playerName);
    },
  handleStartTournament() {
    this.tournamentStore.generateFirstRound();
    this.$router.push({name: "FirstRound"});
  }
}
};

</script>

<template>

  <div class="text-mumauve pb-4">
    <h2>Get Started:</h2>
    <p>Add players name and click Start Tournament button to generate First Round !</p>
  </div>



  <PlayerInput @add-player="addPlayer" />
  <PlayersList :players="players" />
  <StartTournamentButton @click="handleStartTournament" />

</template>

<style scoped>

</style>