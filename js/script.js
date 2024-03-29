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
const resetBtnEl = document.querySelector('#reset')
const playerOneDeckEl = document.querySelector('#playerOneDeck')
const playerTwoDeckEl = document.querySelector('#playerTwoDeck')
const bodyEl = document.querySelector("body")
const backDeckOneEl = document.querySelector('#playerOneBackDeck')
const descriptionEl = document.querySelector('#description')
// const myAudio = document.querySelector('#audio')
let i = 0

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

//function to hide the instructions
function hideInstructions(){
    if(descriptionEl.style.display === "block"){
        descriptionEl.style.display = "none"
    } else {
        descriptionEl.style.display = "block";
    }
};

// compares the value of each hand to determine the winner of the hand or if there is a tie
function compareHands() {
    if (playerOneDeck[i].value > playerTwoDeck[i].value) {
        playerOneScore = playerOneScore + 2
        renderMessage ('You Have Maintained Your Peace, 2 Points Awarded')
        playerOneNum.innerHTML = playerOneScore
        bodyEl.style.background = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player One Won')
    } else if (playerOneDeck[i].value < playerTwoDeck[i].value) {
        playerTwoScore = playerTwoScore + 2
        renderMessage ('Player Two Has Taken Your Peace, 2 Points Awarded')
        playerTwoNum.innerHTML = playerTwoScore
        bodyEl.style.background = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player Two One')
    } else if (playerOneDeck[i].value === playerTwoDeck[i].value) {
        bodyEl.style.background = "black"
        bodyEl.style.color = "red"
        renderMessage ('War Started')
        h1El.innerHTML = 'WAR'
        playerTwoScore = playerTwoScore - 4
        playerTwoNum.innerHTML = playerTwoScore
        playerOneScore = playerOneScore - 4
        renderMessage ('You Entered Into a War, Both Players Lose 4 Points')
        playerOneNum.innerHTML = playerOneScore
        console.log('War Called')
    } else {
    console.log(playerOneDeck[i], playerTwoDeck[i])}

    renderCards(playerOneDeck[i], playerTwoDeck[i])
};

function whoWon() {
    if (playerOneScore > playerTwoScore) {
        messageEl.innerHTML = 'You Won. Peace Has Been Restored.';
    }
    else if (playerOneScore < playerTwoScore) {
        messageEl.innerHTML = 'Player Two Stole Your Peace. You Lose.'
    }
    else if
        (playerOneScore === playerTwoScore) {
        messageEl.innerHTML = 'No Winner. Try Again.'
    }
}

function renderCards(oneCard, twoCard) {
    if (currentClassNames.p1 && currentClassNames.p2) {
        playerOneDeckEl.classList.remove(currentClassNames.p1);
        playerTwoDeckEl.classList.remove(currentClassNames.p2);
    }

    playerOneDeckEl.classList.add(oneCard.face);
    playerTwoDeckEl.classList.add(twoCard.face);
    currentClassNames.p1 = oneCard.face
    currentClassNames.p2 = twoCard.face
}

function renderMessage(msg) {
    messageEl.innerText= (msg)
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
    myAudio.play();
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
        bodyEl.style.background = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
    }


    console.log('the reset button clicks')
}
