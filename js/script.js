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


/*----- cached elements -----*/
const shuffleEl = document.querySelector('#shuffle');
const messageEl = document.querySelector('h2');
const dealCardsBtnEl = document.querySelector('#dealCards');
const num1El = document.querySelector('#number1');
const num2El = document.querySelector('#number2');
const playerOneNum = document.querySelector('#number1')
const playerTwoNum = document.querySelector('#number2')
const playBtnEl = document.querySelector('#playButton')
const playTwoBtnEl = document.querySelector('#playButtonTwo')
let playerDeckEl = document.querySelector('#playerOneDeck')
let i = 0

// Build an 'original' deck of 'card' objects used to create shuffled decks

// const shuffledContainer = document.getElementById('shuffled-deck-container');
// const playCard = document.querySelector(".playCard");

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
    console.log(playerOneDeck);

    playerTwoDeck = deck.slice(26, 52);
    console.log(playerTwoDeck);
}

function compareHands() {
    if (playerOneDeck[i].value > playerTwoDeck[i].value) {
        playerOneScore = playerOneScore + 2
        playerOneNum.innerHTML = playerOneScore
        console.log(' Player One Wins!')
    }
    else if (playerOneDeck[i].value < playerTwoDeck[i].value) {
        playerTwoScore = playerTwoScore + 2
        playerTwoNum.innerHTML = playerTwoScore
        console.log(' Player Two Wins!')
    }
    else if
        (playerOneDeck[i].value === playerTwoDeck[i].value) {
        console.log('Peace Treaty Now')
    }
}

const whoWon = function() {
    if (playerOneScore > playerTwoScore) {
        messageEl.innerHTML = 'Player One Won!'
        messageEl.style.backgroundColor = '#FF0099'
    }
    else if (playerOneScore < playerTwoScore) {
        messageEl.innerHTML = 'Player Two Won, You Lose'
        messageEl.style.backgroundColor = '#FF0000'
    }
    else if
        (playerOneScore === playerTwoScore) {
        messageEl.innerHTML = 'A Tie'
        messageEl.style.backgroundColor = '#6E0DD0'
    }
}

/*----- event listeners -----*/
shuffleEl.addEventListener('click', () => {
    shuffleCards(deck)
    console.log(shuffleCards(deck))
});

dealCardsBtnEl.addEventListener('click', () => {
    divideDeck()
});

playBtnEl.addEventListener('click', () => {
    console.log(i)
    if (i >= 26){
        return whoWon();
    }
    compareHands()
    i += 1;
    // return whoWon()
});

// initialize all state, then call render()

init();



function init(){



    render();
}


function render() {

}


function render() {
}
