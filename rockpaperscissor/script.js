//model
let currentRound = 0;
let resultat = '';
const score= [0,0];
const wordIndex = ['Rock', 'Paper', 'Scissors'];

//view
updateView();
function updateView(){
    let html = '<a href="../index.html"><header><b>Rock Paper Scissors</b></header></a>';
    html+=`
        <button class="resetBtn" onclick="window.location.reload()">Reset</button>
        <a href="unitTesting.html"><button class="resetBtn qunit">QUnit</button></a>
        <div class="row middleEarth">
            <div id="infoRow">Player ${score[0]}</div>
            <div id="infoRow">Round:${currentRound}</div>
            <div id="infoRow">AI: ${score[1]}</div><br>
        </div><br />
        <img class="pickBtn left"   onclick="compareChoices(0)" src="Icons/Rock.png"     width="128px" height="128px">
        <img class="pickBtn center" onclick="compareChoices(1)" src="Icons/Paper.png"    width="128px" height="128px">
        <img class="pickBtn right"  onclick="compareChoices(2)" src="Icons/Scissors.png" width="128px" height="128px">
        <div class="result middleEarth">${resultat}</div>
        
    `;

    document.getElementById('app').innerHTML=html;
}

//controller
function compareChoices(playerChoice){
    let aiChoice = Math.floor(Math.random()*wordIndex.length);
    resultat = `You played ${wordIndex[playerChoice]} - AI played ${wordIndex[aiChoice]}.<br><br>`;
    if (playerChoice > 0 && playerChoice == (aiChoice+1) ||  playerChoice == 0 && aiChoice == 2){
        resultat += `<b>You won!</b>`;
        score[0]++;
    } 
    else if (playerChoice==aiChoice) resultat += `<b>Draw!</b>`;
    else {
        resultat += `<b>AI won!</b>`;
        score[1]++;
    }
    currentRound++;
    checkWin();
    updateView();
}

function checkWin(){
    if (score[0] >= 3){
        alert("Player wins!");
        window.location.reload();
    } 
    else if (score[1] >= 3){
        alert ("AI wins!");
        window.location.reload();
    }
    else return;
}



