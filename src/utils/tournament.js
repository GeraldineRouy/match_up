export function generateFirstRound(players) {
    console.log("Players sent in generateFirstRound :", players);

    const shuffledPlayers = shuffle(players);

    let firstRound = createMatches(shuffledPlayers);

    return firstRound;
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