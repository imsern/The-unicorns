//model
let currentRound = 0;
let resultat = '';
const score= [0,0]
const wordIndex = ['Rock', 'Paper', 'Scissors']

//view
updateView();
function updateView(){
    let html = '<header onclick="nextPage(this, 0)">Rock, Paper, Scissors</header>';
    html+=`
        <button id="resetBtn" onclick="window.location.reload()">Reset</button>
        <a href="unitTesting.html"><button id="qUnitBtn">QUnit</button></a>
        <div class="row">
            <div id="playerScoreCount"><b>${score[0]}</b></div>
            <div id="roundCounter"><b>${currentRound}</b></div>
            <div id="aiScoreCount"><b>${score[1]}</b></div><br>
        </div><br />
        <div class="row">
            <div class="pickBtn" onclick="compareChoices(0)">Rock</div>
            <div class="pickBtn" onclick="compareChoices(1)">Paper</div>
            <div class="pickBtn" onclick="compareChoices(2)">Scissors</div>
        </div>
        <div id="board" class="boardStyle">
            <div id="result"><b>${resultat}</b></div>
        </div>
    `;

    document.getElementById('app').innerHTML=html;
}

//controller
function compareChoices(playerChoice){
    let aiChoice = Math.floor(Math.random()*wordIndex.length);
    resultat = `You played ${wordIndex[playerChoice]} - AI played ${wordIndex[aiChoice]}. `;
    if (playerChoice>0 && playerChoice==(aiChoice+1) ||  playerChoice==0 && aiChoice==2) {
        resultat += `You won!`;
        score[0]++;
    } else {
        resultat += `AI won!`;
        score[1]++;
    }
    currentRound++;
    updateView();
}



