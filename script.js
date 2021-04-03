let fields = []; // emtpy array- will be filled with click

let currentShape = 'cross'; // defines variable, start: 'cross'

function fillShape(id) {
    if (currentShape == 'cross') { // if onclick the value of currentShape ist 'cross'
        currentShape = 'circle'; // change it into 'circle'
    } else {
        currentShape = 'cross' // else change it into 'cross'
    }
    fields[id] = currentShape; // adds 'currentShape' to array at postion clicked
    console.log(fields);
    showElement(); // call function
}

// function to show img
function showElement() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') { // if in array at position i is 'circle'
            document.getElementById('circle_' + i).classList.remove('hide'); // show circle - remove class hide
            document.getElementById('field_' + i).classList.add('disabled'); // disables field, so that it cannot be clicked again
        }
        if (fields[i] == 'cross') { // if in array at position i is 'cross'
            document.getElementById('cross_' + i).classList.remove('hide'); // show cross - remove class hide
            document.getElementById('field_' + i).classList.add('disabled'); // disables field, so that it cannot be clicked again
        }
    }
    winner();
}

//function to declare the winner

function winner() {
    let winner; // defines varible of winner
    // if in field 0 is the same (==) as in field 1 AND (&&) in field 1 is the same (==) as in field 2 
    // AND (&&) in field 2 is the same (==) as in field 0
    // the last && is needed to avoid "undefined"
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
    }
    if (fields[3] == fields[4] && fields[4] == fields[5]  && fields[3]) {
        winner = fields[3];
    }
    if (fields[6] == fields[7] && fields[7] == fields[8]  && fields[6]) {
        winner = fields[6];
    }
    if (fields[0] == fields[3] && fields[3] == fields[6]  && fields[0]) {
        winner = fields[0];
    }
    if (fields[1] == fields[4] && fields[4] == fields[7]  && fields[1]) {
        winner = fields[1];
    }
    if (fields[2] == fields[5] && fields[5] == fields[8]  && fields[2]) {
        winner = fields[2];
    }
    if (fields[0] == fields[4] && fields[4] == fields[8]  && fields[0]) {
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6]  && fields[2]) {
        winner = fields[2];
    }
    if (winner) {
        console.log('winner is:', winner);
        console.log('Spieler', currentShape);
    }


}
