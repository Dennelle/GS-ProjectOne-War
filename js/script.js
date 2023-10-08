/*----- constants -----*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []



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

/*----- functions -----*/
function shuffleCards(arr) {
    return arr.sort( () => Math.random() - 0.5 );
}
function divideDeck() {
    playerOneCards = cards.slice(0,5)
    console.log(playerOneCards)

    playerTwoCards = cards.slice(5,10)
    console.log(playerTwoCards)
}
// thinking how to compare the numbers
function playerOne() {
    playerOneCards = cards.slice(0,5)
    console.log(playerOneCards)
}

function playerTwo() {
    playerTwoCards = cards.slice(5,10)
    console.log(playerTwoCards)
}

//function to deal cards to player one and player two.


/*----- event listeners -----*/
shuffleEl.addEventListener('click', () => {
    shuffleCards(cards)
    console.log(shuffleCards(cards))
});

dealCardsBtnEl.addEventListener('click', () => {
    divideDeck()
});

//thinking how to compare the arrays
playOneBtnEl.addEventListener('click', () => {
    playerOne()
});

playTwoBtnEl.addEventListener('click', () => {
    playerTwo()
});

// initialize all state, then call render()

render()


init();



function init(){

    render();
}

function render() {
}
