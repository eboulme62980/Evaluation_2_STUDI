//variable's declaration
let gameOn;
let currentScore;
let globalScore;
let currentPlayer;

// initialize new game
beginGame();

//to start a new game
function beginGame() {

    // set each variable to 0
    gameOn = true;
    globalScore = [0 , 0];
    currentScore = 0;
    currentPlayer = 0;

    //remove dice's display 
    document.querySelector('.dice').style.display = 'none';

    //set name of 2 players
    document.querySelector('#player-0').textContent = 'Joueur 1';
    document.querySelector('#player-1').textContent = 'Joueur 2';

    // set globall score to 0 for each player
    document.getElementById('global-0').textContent = '0';
    document.getElementById('global-1').textContent = '0';

    // set current score to 0 for each player
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    // remove winner flag for each player
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // remove victory Background color for each player
    document.querySelector('.player-0-panel').classList.remove('victory-bg');
    document.querySelector('.player-1-panel').classList.remove('victory-bg');

    // remove current player flag for each player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //set flag to player 1
    document.querySelector('.player-0-panel').classList.add('active');

}

//to play with other player
function nextPlayer() {

    //select next player
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;

    currentScore = 0;

    //set current score to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //set class active to each player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //remove dice's display
    document.querySelector('.dice').style.display = 'none';
}

//EVENT LISTENERS
//to reset game
document.querySelector('.p1').addEventListener('click', beginGame);

//to generate dice value
document.querySelector('.p2').addEventListener('click', function () {
    if (gameOn) {

        //randomize dice value
        let dice = Math.floor(Math.random() * 6) + 1;

        //display dice image according to its randomized value
        let diceImage = document.querySelector('.dice');
        diceImage.style.display = 'block';
        diceImage.src = 'images/dice-faces/dice-' + dice + '.svg';

        //do only if dice is different of 1
        if (dice !== 1) {
            //  add dice value to current score and display current score to actual player
            currentScore += dice;
            document.querySelector('#current-' + currentPlayer).textContent = currentScore;
        } else {
            nextPlayer();
        }
    }
});

//to add current score to globall score and display victory's message
document.querySelector('.p3').addEventListener('click', function () {
    if (gameOn) {
        globalScore[currentPlayer] += currentScore;

        document.querySelector('#global-' + currentPlayer).textContent = globalScore[currentPlayer];

        // Player who have equal or more than 100 points at globall score
        if (globalScore[currentPlayer] >= 100) {
            document.querySelector('#player-' + currentPlayer).textContent = 'Vous gagnez !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('victory-bg');
            gameOn = false;
        } else {
            nextPlayer();
        }
    }
});


