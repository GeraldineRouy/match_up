//functions to generate new rounds

//takes current players list and mix
import playersList from "@/components/PlayersList.vue";

export function shuffleCurrentPlayersList(currentPlayersArray) {
    console.log("Mixing Current Player List...");
    let shuffled = [...currentPlayersArray.sort(() => Math.random() - 0.5)];
    console.log("Shuffled array : ", shuffled);
    return shuffled;
}

function getTotalOfMatches(playersArray) {
    let totalOfMatches;
    return totalOfMatches = Math.round(playersArray.length / 2);
}

function createNewMatch(matchIndex, player1, player2) {
    matchIndex = [player1, player2];
    console.log("New Match n° " + matchIndex + " created : " + player1 + " vs " + player2);
    return matchIndex;
}

//takes mixed players list and makes pairs
export function makePlayersPairs(playersArray) {
    let matchesForNextRound = {};
    for (let i = 0; i < playersArray.length; i += 2) {
        matchesForNextRound[i/2] = [playersArray[i], playersArray[i+1]];
    }
    console.log(matchesForNextRound);
    return matchesForNextRound;
}

//returns pairs (matchs) of all current players
export function generateNextRound(playersArray) {
    let shuffledPlayers = shuffleCurrentPlayersList(playersArray);
    let matchesForNextRound = makePlayersPairs(shuffledPlayers);
    return matchesForNextRound;
}