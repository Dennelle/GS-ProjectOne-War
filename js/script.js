/*----- constants -----*/
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let winner; // 1 or -1 = winner; 'T' = Tie
let turn; //1 or -1


const Player ={
    '1': 'Player One',
    '-1': 'Player Two'
};
// can I do this?
// const Players = {
//     name:'One',
//     score: 0,
//     level: 1
// };


/*----- state variables: what information does the application need to remember throughout its execution-----*/
turn = 1
winner = null

/*----- cached elements -----*/
const startBtn = document.querySelector('#start');
const messageEl = document.querySelector('h1');
const oneBtnEl = document.querySelector('#playerOneDeck');
const twoBtnEl = document.querySelector('#playerTwoDeck');
const playCardBtnEl = document.querySelector('#playCard');
const num1El = document.querySelector('#number');
const num2El = document.querySelector('#number2');

const randonNum = () =>{
    return ranks[(Math.floor(Math.random() * ranks.length))];
};

/*----- event listeners -----*/
//does the init go in here?
startBtn.addEventListener('click',function(){
    messageEl.innerText = "Let's Play!"
});
//is this correct?
// startBtn.addEventListener('click', init);

// oneBtnEl.addEventListener('click', (evt) =>{
//     console.log(evt.target)
// });
// twoBtnEl.addEventListener('click', (evt) =>{
//     console.log(evt.target)
// });

//this is for one player v. computer
// playCardBtnEl.addEventListener('click', () => {
//     num1El.innerHTML = randonNum();
// });

oneBtnEl.addEventListener('click', () => {
    num1El.innerHTML = randonNum();
});
twoBtnEl.addEventListener('click', () => {
    num2El.innerHTML = randonNum();
});

/*----- functions -----*/
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


//the starting value of the turn is 1. 1 times a negative flips the value then it runs the click event aain with render()
turn = turn * -1
render()


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

- an event listener for the start button √
- an event listener for the play button √
- an object for player and computer √
- the player should be able to enter their name
- the player wins if they have the most cards at the end.
-----*/
