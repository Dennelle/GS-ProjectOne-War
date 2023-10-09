/*----- constants -----*/
const deck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []
let playerOneScore = 0;
let playerTwoScore = 0;

/*----- cached elements -----*/
const shuffleEl = document.querySelector('#shuffle');
const messageEl = document.querySelector('h1');
const dealCardsBtnEl = document.querySelector('#dealCards');
const num1El = document.querySelector('#number1');
const num2El = document.querySelector('#number2');
const playerOneNum = document.querySelector('#number1')
const playerTwoNum = document.querySelector('#number2')
const playOneBtnEl = document.querySelector('#playButtonOne')
const playTwoBtnEl = document.querySelector('#playButtonTwo')
let i = 0

// Build an 'original' deck of 'card' objects used to create shuffled decks
const originalDeck = buildOriginalDeck();
const shuffledContainer = document.getElementById('shuffled-deck-container');
const playCard = document.querySelector(".playCard");

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

/*----- event listeners -----*/
shuffleEl.addEventListener('click', () => {
    shuffleCards(deck)
    console.log(shuffleCards(deck))
});

dealCardsBtnEl.addEventListener('click', () => {
    divideDeck()
});

playOneBtnEl.addEventListener('click', () => {
    console.log(i)
    if (i >= 26){
        console.log(`The winner is $()`)
        return;
    }
    compareHands()
    i += 1;
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
