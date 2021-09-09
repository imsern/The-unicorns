function compareChoices(playerChoice){
    let aiChoice = Math.floor(Math.random()*wordIndex.length);
    resultat = `You played ${wordIndex[playerChoice]} - AI played ${wordIndex[aiChoice]}. `;
    if (playerChoice > 0 && playerChoice == (aiChoice+1) ||  playerChoice == 0 && aiChoice == 2){
        resultat += `You won!`;
        score[0]++;
    } 
    else if (playerChoice==aiChoice) resultat += `Draw!`;
    else {
        resultat += `AI won!`;
        score[1]++;
    }
    currentRound++;
    checkWin();
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