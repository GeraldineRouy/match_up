<script>


import {generateNextRound} from "@/utils/tournament.js";

export default {

  data() {
    return {
      matchesForFirstRound: JSON.parse(this.$route.query.firstRound || "[]"),
      winners: [],
      matchesForNextRound: []
    };
  },

  methods: {
    addWinner(name) {
      console.log("Adding winner :", name);
      this.winners.push(name);
    },
    handleNextRound() {

      if (this.winners.length < 2) {
        alert("Tournament is over !");
        return;
      }

      this.matchesForNextRound = generateNextRound(this.winners);



    },
    // handleNextRound() {
    //   if (this.winners.length !== this.matchesForNextRound.length) {
    //     alert("Please select a winner for each match !");
    //     return;
    //   }
    //
    //   const nextRound = this.createMatches(this.winners);
    //   console.log("nextRound : ", nextRound);
    //
    //   this.matchesForNextRound = nextRound;
    //   this.winners = [];
    // },
    // createMatches(players) {
    //   const matches = [];
    //   for (let i = 0; i < players.length; i += 2) {
    //     matches.push([players[i], players[i + 1] || "BYE"]);
    //   }
    //   return matches;
    // },
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

    <div v-if="
    matchesForFirstRound.length">

      <div v-for="(matches, matchIndex) in matchesForFirstRound" :key="matchIndex" class="mb-8">

        <h2 class="text-lg font-semibold text-secondary">Match {{ matchIndex+ 1 }}</h2>

        <div class="space-y-2">
          <p
              v-for="(player, index) in matches"
             :class="getColorClass(index)"
             class="space-y-2 px-2 text-white"
          >
            {{ player }}
          </p>

          <div>
            <p class="text-mumauve">Who won ?</p>
            <label class="text-secondary">
              <input
                type="radio"
                :name="`winner-${matchIndex}`"
                :value="matches[0]"
                @click="addWinner(matches[0])"
                />
              {{ matches[0] }}
            </label>
            <label class="text-secondary">
              <input
                type="radio"
                :name="`winner-${matchIndex}`"
                :value="matches[1]"
                @click="addWinner(matches[1])"
                />
              {{ matches[1]}}
            </label>
          </div>

        </div>

      </div>

      <button
        @click="handleNextRound"
        class="bg-primary text-white px-4 py-2 rounded mt-4"
        >
        Generate New Round !
      </button>
    </div>

    <div v-else>

      <p class="text-warning font-bold">
        Uh oh, no match available. Please go back to add players and create a new tournament.
      </p>

    </div>

    <RouterLink :to="{ name: 'Home' }" class="text-secondary">Return Home</RouterLink>

  </div>


</template>

<style scoped>

</style>