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
let backDeckOneEl = document.querySelector('#playerOneBackDeck')
let myAudio = document.querySelector('#audio')

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

function compareHands() {
    if (playerOneDeck[i].value > playerTwoDeck[i].value) {
        playerOneScore = playerOneScore + 2
        messageEl.innerHTML = 'You Have Maintained Your Peace, 2 Points Awarded'
        playerOneNum.innerHTML = playerOneScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player One Won')
    }
    else if (playerOneDeck[i].value < playerTwoDeck[i].value) {
        playerTwoScore = playerTwoScore + 2
        messageEl.innerHTML = 'Player Two Has Taken Your Peace, 2 Points Awarded'
        playerTwoNum.innerHTML = playerTwoScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player Two One')
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
        messageEl.innerHTML = 'You Entered Into a War, Both Players Lose 4 Points'
        playerOneNum.innerHTML = playerOneScore
        console.log('War Called')
    }
    console.log(playerOneDeck[i], playerTwoDeck[i])
    renderCards(playerOneDeck[i], playerTwoDeck[i])
}

function whoWon() {
    if (playerOneScore > playerTwoScore) {
        messageEl.innerHTML = 'You Won. Peace Has Been Restored.'
        // messageEl.style.backgroundColor = '#2bd1fc'
    }
    else if (playerOneScore < playerTwoScore) {
        messageEl.innerHTML = 'Player Two Stole Your Peace. You Lose.'
        // messageEl.style.backgroundColor = '#f3ea5f'
    }
    else if
        (playerOneScore === playerTwoScore) {
        messageEl.innerHTML = 'No Winner. Try Again.'
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
        h1El.innerHTML = "PEACE"
        myAudio.play()
    }

    console.log('the reset button clicks')
}


