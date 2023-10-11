/*----- constants -----*/
const deck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();

//new card deck code
const deckOfCards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let deckOne = []
let deckTwo = []
let cardtoRemove

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []
let playerOneScore = 0;
let playerTwoScore = 0;


/*----- cached elements -----*/
const shuffleEl = document.querySelector('#shuffle');
const messageEl = document.querySelector('h2');
const dealCardsBtnEl = document.querySelector('#dealCards');
const playerOneNum = document.querySelector('#number1')
const playerTwoNum = document.querySelector('#number2')
const playBtnEl = document.querySelector('#playButton')
// let playerOneDeckEl = document.querySelector('#playerOneDeck')
// let playerTwoDeckEl = document.querySelector('#playerTwoDeck')
let resetBtnEl = document.querySelector('#reset')
let i = 0

//new card deck code
let backDeckOneEl = document.querySelector('#playerOneBackDeck')
let backDeckTwoEl = document.querySelector('#playerTwoBackDeck')
let playerOneDeckEl = document.querySelector('#playerOneDeck')
let playerTwoDeckEl = document.querySelector('#playerTwoDeck')
// const flipBtnOneEl = document.querySelector('#playerOneBackDeck')

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
//changed to a declaration
// const shuffleCards = function (arr) {
//     return arr.sort(() => Math.random() - 0.5);
// }

function divideDeck() {
    playerOneDeck = deck.slice(0, 26);
    console.log(playerOneDeck);

    playerTwoDeck = deck.slice(26, 52);
    console.log(playerTwoDeck);
//new code
    render(playerOneDeck && playerTwoDeck)

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
    renderCards(playerOneDeck[i], playerTwoDeck[i])
}
//changed to a declaration
// const whoWon = function () {
//     if (playerOneScore > playerTwoScore) {
//         messageEl.innerHTML = 'Player One Won!'
//         messageEl.style.backgroundColor = '#2bd1fc'
//     }
//     else if (playerOneScore < playerTwoScore) {
//         messageEl.innerHTML = 'Player Two Won, You Lose'
//         messageEl.style.backgroundColor = '#f3ea5f'
//     }
//     else if
//         (playerOneScore === playerTwoScore) {
//         messageEl.innerHTML = 'A Tie'
//         messageEl.style.backgroundColor = '#6E0DD0'
//     }
// }

function whoWon() {
    if (playerOneScore > playerTwoScore) {
        messageEl.innerHTML = 'Player One Won!'
        messageEl.style.backgroundColor = '#2bd1fc'
    }
    else if (playerOneScore < playerTwoScore) {
        messageEl.innerHTML = 'Player Two Won, You Lose'
        messageEl.style.backgroundColor = '#f3ea5f'
    }
    else if
        (playerOneScore === playerTwoScore) {
        messageEl.innerHTML = 'A Tie'
        messageEl.style.backgroundColor = '#6E0DD0'
    }
}

function renderCards(oneCard, twoCard) {
    playerOneDeckEl.classList.add(oneCard.face);
    playerTwoDeckEl.classList.add(twoCard.face);

    console.log(oneCard)
    console.log(twoCard)
}
//new card deck code
function handleClick() {
    if (deckOfCards.length > 0) {
    let randIdx = Math.floor(Math.random()*deckOfCards.length)
    }
    let cardPicked = deckOfCards.splice(randIdx, 1)[0]
    deckOne.push(cardPicked)
    render(cardPicked)
}


/*----- event listeners -----*/
shuffleEl.addEventListener('click', () => {
    shuffleCards(deck)
    messageEl.innerHTML = "Click Deal Cards"
    console.log(shuffleCards(deck))
});

dealCardsBtnEl.addEventListener('click', () => {
    divideDeck()
    messageEl.innerHTML = "Click Play"
});

playBtnEl.addEventListener('click', () => {
    console.log(i)
    if (i >= 26) {
        return whoWon();
    }
    compareHands()
    i += 1;
    // renderCards();
});

resetBtnEl.addEventListener('click', render)

//new card deck code
backDeckOneEl.addEventListener('click', () => console.log('clicked'))

// initialize all state, then call render()

// experimental code starts here

init()

function render() {
    if (i === 26) {
        i = 0
        playerOneScore = 0
        playerTwoScore = 0
        playerTwoNum.innerHTML = "0"
        playerOneNum.innerHTML = "0"
        messageEl.innerHTML = "Click Shuffle Cards"
        messageEl.style.backgroundColor = "rgb(31,81,255)"

        console.log('the reset button clicks')
    }
}

function init() {
    deckOne = deckOfCards;

    render()
}
function render2(cardPicked){
    if (deckOne.length === 1){
        backDeckOneEl.classList.remove("outline")
    }
    if (deckOne.length > 1) {
        backDeckOneEl.classList.remove(cardToRemove)
    }
    cardtoRemove = cardPicked

   backDeckOneEl.classList.add("Shadow");
   backDeckOneEl.remove("shadow");
   if (deckOne.length === 0) {
    backDeckOneEl.classList.add("outline");
    backDeckOneEl.classList.remove("back-red")
   }
}
// Need to delete but double check script first.
// const num1El = document.querySelector('#number1');
// const num2El = document.querySelector('#number2');
