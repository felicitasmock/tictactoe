let fields = []; // emtpy array- will be filled with click
let gameOver = false; // variable for end of game
let currentShape = 'cross'; // defines variable, start: 'cross'

/**
 * 
 * @param {string} id - This functions fills shape with cross or circle 
 */
function fillShape(id) {
    if (!fields[id] && !gameOver) { // if get fields at position i is empty; its undefine && game is not overOver is true then don't do function 
        //! -> negiert (macht das Gegenteil) - wird benötigt, weil das allererste Feld leer ist
        // function wird nur ausgeführt, wenn unser feld noch nicht gefüllt ist, damit das gleiceh Feld nicht zwei mal gefüllt wird
        if (currentShape == 'cross') { // if onclick the value of currentShape ist 'cross'
            currentShape = 'circle'; // change it into 'circle'
        } else {
            currentShape = 'cross' // else change it into 'cross'
        }
        fields[id] = currentShape; // adds 'currentShape' to array at postion clicked
        console.log(fields);
        showElement(); // call function
        winner();
        showCurrentPlayer();
    }
}

// function to show img
function showElement() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') { // if in array at position i is 'circle'
            document.getElementById('circle_' + i).classList.remove('hide'); // show circle - remove class hide
            //document.getElementById('field_' + i).classList.add('disabled'); // disables field, so that it cannot be clicked again
        }
        if (fields[i] == 'cross') { // if in array at position i is 'cross'
            document.getElementById('cross_' + i).classList.remove('hide'); // show cross - remove class hide
            //document.getElementById('field_' + i).classList.add('disabled'); // disables field, so that it cannot be clicked again
        }
    }

}

//function to declare the winner
function winner() {
    let winner; // defines varible of winner
    // if in field 0 is the same (==) as in field 1 AND (&&) in field 1 is the same (==) as in field 2 
    // AND (&&) in field 2 is the same (==) as in field 0
    // the last && is needed to avoid "undefined"
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line_2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line_3').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line_5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_8').style.transform = 'rotate(135deg) scaleX(1)';;
    }

    // game over if all fields are filled out and there is no winner
    let len = fields.filter(Boolean).length;
    if (len === 9) {
    console.log('game over', len);
       document.getElementById('innerEndScreen').innerHTML = `
       <div class="game-over">
        <div class="winner-name"></div>
        <button class="replay-btn" onClick="replayGame()">Nochmal spielen</button>
        </div>`;
       generateGameOver();
    }
    // if there is a winner
    if (winner) {
        console.log('winner is:', winner);
        console.log('Spieler', currentShape);
        gameOver = true; // set variable to true, so that in function fillShape will executed
        if (winner == 'circle') { // if variable winner = circle than Player 1
            winner = 'Player 1';
        } else {
            winner = 'Player 2'; // if variable  winner = cross than Player 2
        }
       // document.getElementById('winnerName').innerHTML = `<b>${winner}</b> hat gewonnen!`
        document.getElementById('innerEndScreen').innerHTML = `
        <div class="winner-screen">
                <div class="winner-name" id="winnerName"><b>${winner}</b> hat gewonnen!</div>
                <button class="replay-btn" onClick="replayGame()">Nochmal spielen</button>
        <div>
               `;

        generateWinnerScreen()
    }


}

// generate winner screen
function generateWinnerScreen() {
    setTimeout(function () {
        document.getElementById('endScreen').classList.remove('hide');
    }, 1000);
}
// generate game over screen
function generateGameOver() {
    setTimeout(function () {
        document.getElementById('endScreen').classList.remove('hide');
    }, 1000); 
}


/*
// greys out inactive player
function showCurrentPlayer() {

    if (currentShape == 'circle') {
        document.getElementById('player_2').classList.remove('player-inactive');
        document.getElementById('player_1').classList.add('player-inactive');
    } else {
        document.getElementById('player_1').classList.remove('player-inactive');
        document.getElementById('player_2').classList.add('player-inactive');
    }
}
*/

// function to highlight current player
function showCurrentPlayer() {
    if (currentShape == 'circle') {
        document.getElementById('player_1').classList.remove('current-player');
        document.getElementById('player_2').classList.add('current-player');
    } else {
        document.getElementById('player_2').classList.remove('current-player');
        document.getElementById('player_1').classList.add('current-player');
    }
}



//replay game
function replayGame() {
    document.getElementById('endScreen').classList.add('hide'); // removes endScreen
    gameOver = false; // set variable back to false
    fields = []; // empties array
    currentShape = 'cross'; // sets current Shape / Player back to start
    document.getElementById('player_2').classList.remove('current-player');
    document.getElementById('player_1').classList.add('current-player');

    // sets transformation of winner lines back to 0
    for (let i = 1; i < 9; i++) {
        document.getElementById('line_' + i).style.transform = 'scaleX(0)';
    }

    /* 
     for (let i = 1; i < 9; i++) { // removes (hides) winner line
         document.getElementById('line_' + i).classList.add('hide');        
     }
     */

    for (let i = 0; i < 9; i++) { // removes (hides) cross and circle
        document.getElementById('circle_' + i).classList.add('hide');
        document.getElementById('cross_' + i).classList.add('hide');
    }

}
