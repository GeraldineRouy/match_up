import {defineStore} from "pinia";
import {generateNextRound} from "@/utils/tournament.js";

export const useTournamentStore = defineStore("tournament", {
    state: () => ({
        players: [],
        matches: []
    }),
    actions: {
        addPlayer(playerName) {
            console.log("store is adding...");
            if (!this.players.includes(playerName)) {
                console.log("new player added in store : " + playerName);
                this.players.push(playerName);
            }
        },

        generateFirstRound() {
            if (this.players.length < 2) {
                alert("You must have at least two players !");
                return;
            }
            this.matches = generateNextRound(this.players);
            console.log("matches to play next round : " + this.matches);
        }
    }
});