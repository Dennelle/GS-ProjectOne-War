/*----- constants -----*/
const deck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []
let playerOneScore = 0;
let playerTwoScore = 0;

let currentClassNames = { p1: "", p2: "" }
// use this to switch to War
let war = true;


/*----- cached elements -----*/
const shuffleEl = document.querySelector('#shuffle');
const messageEl = document.querySelector('h2');
const h1El = document.querySelector('h1');
const dealCardsBtnEl = document.querySelector('#dealCards');
const playerOneNum = document.querySelector('#number1')
const playerTwoNum = document.querySelector('#number2')
const playBtnEl = document.querySelector('#playButton')
let resetBtnEl = document.querySelector('#reset')
let i = 0
let playerOneDeckEl = document.querySelector('#playerOneDeck')
let playerTwoDeckEl = document.querySelector('#playerTwoDeck')
const bodyEl = document.querySelector("body")

//new card deck code
let backDeckOneEl = document.querySelector('#playerOneBackDeck')

/*----- functions -----*/
function buildOriginalDeck() {
    // Use nested forEach to generate card objects
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push
                (
                    {
                        // The 'face' property maps to the library's CSS classes for cards
                        face: `${suit}${rank}`,
                        //I need to change this for war.
                        value: Number(rank) || (rank === 'A' ? 11 : 10)
                    }
                );
        });
    });
    return deck;
}

function shuffleCards(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function divideDeck() {
    playerOneDeck = deck.slice(0, 26);
    // console.log(playerOneDeck);

    playerTwoDeck = deck.slice(26, 52);
    // console.log(playerTwoDeck);
}
//no peace treaty game
// function compareHands() {
//     if (playerOneDeck[i].value > playerTwoDeck[i].value) {
//         playerOneScore = playerOneScore + 2
//         playerOneNum.innerHTML = playerOneScore
//         console.log(' Player One Wins!')
//     }
//     else if (playerOneDeck[i].value < playerTwoDeck[i].value) {
//         playerTwoScore = playerTwoScore + 2
//         playerTwoNum.innerHTML = playerTwoScore
//         console.log(' Player Two Wins!')
//     }
//     else if
//         (playerOneDeck[i].value === playerTwoDeck[i].value) {
//         console.log('Peace Treaty Now')
//     }
//     renderCards(playerOneDeck[i], playerTwoDeck[i])
// }

function compareHands() {
    if (playerOneDeck[i].value > playerTwoDeck[i].value) {
        playerOneScore = playerOneScore + 2
        messageEl.innerHTML = 'Player One gets 2 points!'
        playerOneNum.innerHTML = playerOneScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log(' Player One Wins!')
    }
    else if (playerOneDeck[i].value < playerTwoDeck[i].value) {
        playerTwoScore = playerTwoScore + 2
        messageEl.innerHTML = 'Player Two gets 2 points!'
        playerTwoNum.innerHTML = playerTwoScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log(' Player Two Wins!')
    }
    if
        (playerOneDeck[i].value === playerTwoDeck[i].value) {
            bodyEl.style.backgroundColor = "black"
            bodyEl.style.color = "red"
            messageEl.innerHTML = 'War Started'
            h1El.innerHTML = 'WAR'
            playerTwoScore = playerTwoScore - 4
            playerTwoNum.innerHTML = playerTwoScore
            playerOneScore = playerOneScore - 4
            messageEl.innerHTML = 'Both players lose 4 points'
            playerOneNum.innerHTML = playerOneScore
            console.log('War Called')
    }
    console.log(playerOneDeck[i], playerTwoDeck[i])
    renderCards(playerOneDeck[i], playerTwoDeck[i])

}

//     function warScenario() {
//     if (playerOneDeck[i].value > playerTwoDeck[i].value) {
//         playerOneScore = playerOneScore - 4
//         playerOneNum.innerHTML = playerOneScore
//         messageEl.innerHTML = 'Player One loses 4 points!'
//         console.log(' Player One Wins!')
//     }
//     else (playerOneDeck[i].value < playerTwoDeck[i].value)
//         playerTwoScore = playerTwoScore - 4
//         playerTwoNum.innerHTML = playerTwoScore
//         messageEl.innerHTML = 'Player Two loses 4 points!'
//         console.log(' Player Two Wins!')
// }


function whoWon() {
    if (playerOneScore > playerTwoScore) {
        messageEl.innerHTML = 'Player One Won!'
        // messageEl.style.backgroundColor = '#2bd1fc'
    }
    else if (playerOneScore < playerTwoScore) {
        messageEl.innerHTML = 'Player Two Won, You Lose'
        // messageEl.style.backgroundColor = '#f3ea5f'
    }
    else if
        (playerOneScore === playerTwoScore) {
        messageEl.innerHTML = 'No Winner'
        // messageEl.style.backgroundColor = '#6E0DD0'
    }
}

function renderCards(oneCard, twoCard) {
    if (currentClassNames.p1 && currentClassNames.p2) {
        playerOneDeckEl.classList.remove(currentClassNames.p1);
        playerTwoDeckEl.classList.remove(currentClassNames.p2);
    }
    //remove previously added class name
    playerOneDeckEl.classList.add(oneCard.face);
    playerTwoDeckEl.classList.add(twoCard.face);
    currentClassNames.p1 = oneCard.face
    currentClassNames.p2 = twoCard.face
}

/*----- event listeners -----*/
//FOR NAV BAR
// shuffleEl.addEventListener('click', () => {
//     shuffleCards(deck)
//     messageEl.innerHTML = "Click Deal Cards"
//     console.log(shuffleCards(deck))
// });

// dealCardsBtnEl.addEventListener('click', () => {
//     divideDeck()
//     messageEl.innerHTML = "Click Play"
// });

// playBtnEl.addEventListener('click', () => {
//     console.log(i)
//     if (i >= 26) {
//         return whoWon();
//     }
//     compareHands()
//     i += 1;
// });



//ALL IN ONE


backDeckOneEl.addEventListener('click', () => {
    shuffleCards(deck);
    divideDeck();
    if (i >= 26) {
        return whoWon();
    }
    compareHands();
    i += 1;
});

resetBtnEl.addEventListener('click', render)
// initialize all state, then call render()

function render() {
    if (i === 26) {
        i = 0
        playerOneScore = 0
        playerTwoScore = 0
        playerTwoNum.innerHTML = "0"
        playerOneNum.innerHTML = "0"
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML="PEACE"
        // messageEl.innerHTML = "Click Card to Play"
        // messageEl.style.backgroundColor = "rgb(31,81,255)"
    }

    console.log('the reset button clicks')
}
