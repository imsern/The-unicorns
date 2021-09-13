function compareChoices(playerChoice){
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
        return 'You won';       
    } 
    else if (score[1] >= 3){
        return 'AI won';
        
    }
    else return;
}


// sjekke at score går opp for player om player vinner og motsatt
// sjekke alle forskjellige kombinasjoner "rock vs scissors" osv funker som de skal på begge
// sette aiChoice til de forskjellige ordene, og endre verdien i unit test
// currentround