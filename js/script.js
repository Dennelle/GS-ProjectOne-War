/*----- constants -----*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleCards(arr){
    return arr.sort( () => Math.random() - 0.5 );
}

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []


/*----- cached elements -----*/
const shuffleEl = document.querySelector('#shuffle');
const messageEl = document.querySelector('h1');
const playCardBtnEl = document.querySelector('#playCards');
const num1El = document.querySelector('#number1');
const num2El = document.querySelector('#number2');
const playerOneNum = document.querySelector('#number1')
const playerTwoNum = document.querySelector('#number2')

/*----- event listeners -----*/
playCardBtnEl.addEventListener('click', () => {
    divideDeck()
});

shuffleEl.addEventListener('click', () => {
    shuffleCards(cards)
    console.log(shuffleCards(cards))
});


/*----- functions -----*/
function divideDeck() {
    playerOneCards = cards.slice(0,5)
    console.log(playerOneCards)

    playerTwoCards = cards.slice(5,10)
    console.log(playerTwoCards)
    }

render()


init();


// initialize all state, then call render()
function init(){

    render();
}

function render() {
}
