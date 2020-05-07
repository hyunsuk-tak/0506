var scores, roundScore, activePlayer;
init();
//set up for the roll dice button
document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.ceil(Math.random() * 6);
    console.log(dice);

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';// you can bring images from the image folder

    if (dice !== 1) {
        roundScore += dice;
        // console.log('the round score is' + roundScore);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
        // if (activePlayer === 0) {
        //     activePlayer = 1;
        //     // document.querySelector('.player-0-panel').classList.add('active');
        //     // document.querySelector('.player-0-panel').classList.remove('active');
        // } else {
        //     activePlayer = 0;
        //     document.querySelector('.player-0-panel').classList.remove('active');
        //     document.querySelector('.player-0-panel')classList.add('active');}
    }
});// end eventListener for roll button

//hold button
document.querySelector('.btn-hold').addEventListener('click', function () {
    // scores[activePlayer] = scores[activePlayer] + roundScore;
    scores[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';

    } else {
        nextPlayer();
    }
});// end eventListener for hold button

//new game button
document.querySelector('.btn-new').addEventListener('click', function () {
    init();

});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;//who is current player

    //initial game states
    document.querySelector('.dice').style.display = 'none';// hides the dice graphic until we need it
    //set initial current and total scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //reset names
    document.getElementById('name-0').textContent = "player 1";
    document.getElementById('name-0').textContent = "player 2";
    // remove winner class and active class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //display hold and roll buttons
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';

    //add the active class back to the first player
    document.querySelector('.player-0-panel').classList.add('active');
}