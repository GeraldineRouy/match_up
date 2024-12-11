export function generateFirstRound(players) {
    console.log("Players sent in generateFirstRound :", players);

    const shuffledPlayers = shuffle(players);

    let matchesForNextRound = createMatches(shuffledPlayers);

    return matchesForNextRound;
}

export function generateNextRound(players) {
    const shuffledPlayers = shuffle(players);
    const matchesForNextRound = createMatches(shuffledPlayers);

    // if (players.length !== matchesForNextRound.length) {
    //     alert("Please select a winner for each match !");
    //     return;
    // }

    console.log("Matches for next Round : ", matchesForNextRound);

    this.winners = [];
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createMatches(players) {
    const matches = [];
    for (let i = 0; i < players.length; i += 2) {
        matches.push([players[i], players[i + 1] || 'No player found : wait next round to play and support your friends \\o/']);
    }
    return matches;
}