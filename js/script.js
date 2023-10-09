/*----- constants -----*/
const deck = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

function buildOriginalDeck() {
    //const deck = [];
    // Use nested forEach to generate card objects
    suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
    deck.push({
    // The 'face' property maps to the library's CSS classes for cards
    face: `${suit}${rank}`,
    value: Number(rank) || (rank === 'A' ? 11 : 10)
    });
    });
    });
    return deck;
    }

/*----- state variables: what information does the application need to remember throughout its execution-----*/
let playerOneDeck = []
let playerTwoDeck = []

let shuffledDeck;


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

// Build an 'original' deck of 'card' objects used to create shuffled decks
const originalDeck = buildOriginalDeck();
const shuffledContainer = document.getElementById('shuffled-deck-container');
const playCard = document.querySelector(".playCard");



/*----- functions -----*/
    function shuffleCards(arr) {
    return arr.sort( () => Math.random() - 0.5 );
    }

    function divideDeck() {
    playerOneDeck = deck.slice(0,26)
    console.log(playerOneDeck);

    playerTwoDeck = deck.slice(26,52)
    console.log(playerTwoDeck);
}

    function getNewShuffledDeck() {
    // Create a copy of the originalDeck (leave originalDeck untouched!)
    const tempDeck = [...originalDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
    }

    function handleMove(evt) {
        // Check if we should exit the function
        // according to the current state
        // For example, ignore clicks if the
        // game has been won or is a tie:
        if (winner) return;
        // Logic/Code to update all impacted state
        // Visualize all state
        render();
        }
    function renderNewShuffledDeck() {
            // Create a copy of the originalDeck (leave originalDeck untouched!)
            shuffledDeck = getNewShuffledDeck();
            }



/*----- event listeners -----*/
shuffleEl.addEventListener('click', () => {
    shuffleCards(deck)
    console.log(shuffleCards(deck))
});

dealCardsBtnEl.addEventListener('click', () => {
    divideDeck()
});


document.querySelector('button').addEventListener('click', renderNewShuffledDeck);

// initialize all state, then call render()

render()


init();



function init(){

    render();
}

function render() {
}




renderNewShuffledDeck();




function render() {
}
