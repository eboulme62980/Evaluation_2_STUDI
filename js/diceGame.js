//variable's declaration
let game;
let current_score;
let globall_score;
let current_player;

// initialize new game
beginGame();

//to start a new game
function beginGame() {

    // set each variable to 0
    game = true;
    globall_score = [0 , 0];
    current_score = 0;
    current_player = 0;

    //remove dice's display 
    document.querySelector('.dice').style.display = 'none';

    // set globall score to 0 for each player
    document.getElementById('globall-0').textContent = '0';
    document.getElementById('globall-1').textContent = '0';

    // set current score to 0 for each player
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    // remove winner flag for each player
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // remove current player flag for each player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //set flag to player 1
    document.querySelector('.player-0-panel').classList.add('active');

}


