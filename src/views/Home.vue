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

  <div>
    <h1>MatchUp</h1>
    <PlayerInput @add-player="addPlayer" />
    <PlayersList :players="players" />
    <StartTournamentButton @start-tournament="startTournament" />
  </div>

</template>

<style scoped>

</style>