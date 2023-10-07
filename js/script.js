/*----- constants -----*/
let ranks = ['1', '2', '3', '4', '5', '6'];
const Users ={
    '1': 'Player One',
    '-1': 'Player Two'
};
const Players = {
    name:'One',
    score: 0,
    level: 1
};


/*----- state variables: what information does the application need to remember throughout its execution-----*/
let turn; //1 or -1
let winner; // 1 or -1 = winner; 'T' = Tie


/*----- cached elements -----*/
const playCardBtn = document.querySelector('#playCard');
let randomNum = ranks[(Math.floor(Math.random() * ranks.length))];
const shuffleBtn = document.querySelector('#shuffle');
const messageEl = document.querySelector('h1');
const oneBtnEl = document.querySelector('#playerOneDeck');
const twoBtnEl = document.querySelector('#playerTwoDeck');



/*----- event listeners -----*/
//does the init go in here?
shuffleBtn.addEventListener('click',function(){
    messageEl.innerText = "Let's Play!"
});
//is this correct?
// shuffleBtn.addEventListener('click', init);

oneBtnEl.addEventListener('click', (evt) =>{
    console.log(evt.target)
});

twoBtnEl.addEventListener('click', (evt) =>{
    console.log(evt.target)
});

//it only generates a random number once.
// playCardBtn.addEventListener('click', (evt) => {
//     console.log(evt.target)
//    })

playCardBtn.addEventListener('click', pickRanNumber);
oneBtnEl.addEventListener('click', pickRanNumber);
twoBtnEl.addEventListener('click', pickRanNumber);

/*----- functions -----*/
//this has to pick a random from the array
function pickRanNumber() {
    alert('it worked')
};




// function PlayerOne(name, score, level){
//     this.player = Dennelle;
//     this.score = 0;
//     this.level = 1;
// }

// function PlayerTwo(name, score, level){
//     this.player = Computer;
//     this.score = 0;
//     this.level = 1;
// }


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
