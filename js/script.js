/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h']; //probably won't use this
let ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const shuffleBtn = document.querySelector('#shuffle');


/*----- state variables: what information does the application need to remember throughout its execution-----*/
let turn; //1 or -1
let winner; // 1 or -1 = winner; 'T' = Tie

/*----- cached elements -----*/
const playCardBtn = document.querySelector('#playCard');
const randomCard = ranks[(Math.floor(Math.random() * ranks.length))];

let Player = {
    name:'One',
    score: 0
}

/*----- event listeners -----*/
shuffleBtn.addEventListener('click', init());


//it only generates a random number once.
playCardBtn.addEventListener('click', function(){
    console.log(randomCard)
});
//
shuffleBtn.addEventListener('click',function(){
    document.querySelector('h1').innerText = "Let's Play!"
});

/*----- functions -----*/


init();

// initialize all state, then call render()
function init(){
    turn = 1;
    winner = null;
    render();
}

function render() {

}

/*----- Things I need

- an event listener for the shuffle/start button
- an event listener for the play button
- an object for player and computer
- the player should be able to enter their name
- the player wins if they have the most cards at the end.

-----*/
