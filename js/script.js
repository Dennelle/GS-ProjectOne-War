/*----- constants -----*/
const deck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const originalDeck = buildOriginalDeck();

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []
let playerThreeDeck = []
let playerFourDeck = []
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let currentClassNames = { p1: "", p2: "", p3: "", p4: "" }

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

const playerThreeNum = document.querySelector('#number3')
const playerFourNum = document.querySelector('#number3')
let playerThreeDeckEl = document.querySelector('#playerThreeDeck')
let playerFourDeckEl = document.querySelector('#playerFourDeck')

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
    playerOneDeck = deck.slice(0, 13);
    // console.log(playerOneDeck);

    playerTwoDeck = deck.slice(13, 26);
    // console.log(playerTwoDeck);

    playerThreeDeck = deck.slice(26, 39);
    // console.log(playerThreeDeck);

    playerFourDeck = deck.slice(39, 52);
    // console.log(playerFourDeck);
}

function compareHands() {
    if (playerOneDeck[i].value > playerTwoDeck[i].value && playerOneDeck[i].value > playerThreeDeck[i].value && playerOneDeck[i].value > playerFourDeck[i].value) {
        playerOneScore = playerOneScore + 2
        messageEl.innerHTML = 'You Have Maintained Your Peace, 2 Points Awarded'
        playerOneNum.innerHTML = playerOneScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player One Won')
    }  if (playerTwoDeck[i].value > playerOneDeck[i].value && playerTwoDeck[i].value > playerThreeDeck[i].value && playerTwoDeck[i].value > playerFourDeck[i].value) {
        playerTwoScore = playerTwoScore + 2
        messageEl.innerHTML = 'You Have Maintained Your Peace, 2 Points Awarded'
        playerTwoNum.innerHTML = playerTwoScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player Two Won')
    }  if (playerThreeDeck[i].value > playerOneDeck[i].value && playerThreeDeck[i].value > playerTwoDeck[i].value && playerThreeDeck[i].value > playerFourDeck[i].value) {
        playerThreeScore = playerThreeScore + 2
        messageEl.innerHTML = 'You Have Maintained Your Peace, 2 Points Awarded'
        playerThreeNum.innerHTML = playerThreeScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player Three Won')
    } if (playerFourDeck[i].value > playerOneDeck[i].value && playerFourDeck[i].value > playerThreeDeck[i].value && playerFourDeck[i].value > playerOneDeck[i].value) {
        playerFourScore = playerFourScore + 2
        messageEl.innerHTML = 'You Have Maintained Your Peace, 2 Points Awarded'
        playerFourNum.innerHTML = playerFourScore
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
        console.log('Player Four Won')
    } else {
        bodyEl.style.backgroundColor = "black"
        bodyEl.style.color = "red"
        messageEl.innerHTML = 'War Started'
        h1El.innerHTML = 'WAR'
        playerTwoScore = playerTwoScore - 4
        playerThreeScore = playerThreeScore -4
        playerFourScore = playerFourScore - 4
        playerOneScore = playerOneScore - 4
        playerOneNum.innerHTML = playerOneScore
        playerTwoNum.innerHTML = playerTwoScore
        playerThreeNum.innerHTML = playerThreeScore
        playerFourNum.innerHTML = playerFourScore
        messageEl.innerHTML = 'You Entered Into a War, Both Players Lose 4 Points'
        playerOneNum.innerHTML = playerOneScore
        console.log('War Called')
    }
    console.log(playerOneDeck[i], playerTwoDeck[i], playerThreeDeck[i], playerFourDeck[i])
    renderCards(playerOneDeck[i], playerTwoDeck[i], playerThreeDeck[i], playerFourDeck[i])
}

function whoWon() {
<<<<<<< HEAD
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
=======
    if (playerOneScore > playerTwoScore && playerOneScore > playerThreeScore && playerOneScore > playerFourScore) {
        messageEl.innerHTML = 'You Won! Peace Has Been Restored!'
        // messageEl.style.backgroundColor = '#2bd1fc'
    }
    else if (playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore && playerTwoScore > playerFourScore) {
        messageEl.innerHTML = 'Player Two Stole Your Peace. You Lose!'
        // messageEl.style.backgroundColor = '#f3ea5f'
    }
    else if (playerThreeScore > playerTwoScore && playerThreeScore > playerOneScore && playerOneScore > playerFourScore) {
        messageEl.innerHTML = 'Player Two Stole Your Peace. You Lose!'
        // messageEl.style.backgroundColor = '#f3ea5f'
    }
    else if (playerFourScore > playerTwoScore && playerFourScore > playerThreeScore && playerFourScore > playerOneScore) {
        messageEl.innerHTML = 'Player Two Stole Your Peace. You Lose!'
        // messageEl.style.backgroundColor = '#f3ea5f'
    }
    else {
        messageEl.innerHTML = 'No Winner. Try Again!'
>>>>>>> 92820c78d068bb91d275002568ee29b709413fe6
        // messageEl.style.backgroundColor = '#6E0DD0'
    }
}

function renderCards(oneCard, twoCard, threeCard, fourCard) {
    if (currentClassNames.p1 && currentClassNames.p2 && currentClassNames.p3 && currentClassNames.p4) {
        playerOneDeckEl.classList.remove(currentClassNames.p1);
        playerTwoDeckEl.classList.remove(currentClassNames.p2);
        playerOneDeckEl.classList.remove(currentClassNames.p3);
        playerTwoDeckEl.classList.remove(currentClassNames.p4);
    }
    //remove previously added class name
    playerOneDeckEl.classList.add(oneCard.face);
    playerTwoDeckEl.classList.add(twoCard.face);
    playerThreeDeckEl.classList.add(threeCard.face);
    playerFourDeckEl.classList.add(fourCard.face);
    currentClassNames.p1 = oneCard.face
    currentClassNames.p2 = twoCard.face
    currentClassNames.p3 = threeCard.face
    currentClassNames.p4 = fourCard.face
}

/*----- event listeners -----*/
backDeckOneEl.addEventListener('click', () => {
    shuffleCards(deck);
    divideDeck();
    if (i >= 13) {
        return whoWon();
    }
    compareHands();
    i += 1;
});

resetBtnEl.addEventListener('click', render)
// initialize all state, then call render()

function render() {
    if (i === 13) {
        i = 0
        playerOneScore = 0
        playerTwoScore = 0
        playerThreeScore = 0
        playerFourScore = 0
        playerTwoNum.innerHTML = "0"
        playerOneNum.innerHTML = "0"
        playerThreeNum.innerHTML = "0"
        playerFourNum.innerHTML = "0"
        bodyEl.style.backgroundColor = ""
        bodyEl.style.color = ""
        h1El.innerHTML = "PEACE"
<<<<<<< HEAD
        myAudio.play()
=======
>>>>>>> 92820c78d068bb91d275002568ee29b709413fe6
    }

    console.log('the reset button clicks')
}


