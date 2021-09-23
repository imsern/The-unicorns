// begge har hp.
// opponent skal ha chance to miss.
// player attack power<opponent attack power.
// player has chance to do critical damage (2xpower).



model={
    winLossMessage:"",
    disabled: false,
    player: {
        name:"You",
        hp: 100,
        basePower:0.8,
        criticalChance:0.1,
        attackMessage:"",
        attacks: [
            {name: 'Quick Attack', damage: 10},
            {name: 'Tackle', damage: 20},
            {name: 'Slash', damage: 30},
            {name: 'Call Trump', damage: 40},
        ]
    },
    opponent: {
        name:"Bobama",
        hp: 100,
        basePower:1,
        chanceToMiss:0.1,
        attackMessage:"",
        attacks:[
            {name: 'Logical Argument', damage: 10},
            {name: 'Bite', damage: 20},
            {name: 'Power Trip', damage: 30},
            {name: 'Obama Care', damage: 40},
            //Forslag til navn:
            //Sterilize
            //Manhandle his ham candle
            //Arbitrary deprivation of life
            //Carrot and stick
            //Delete
            //Dick kick
            //Tear off his right arm and beat him to death with the bloody stump
            //Rest him in peace
            //End his oxygen habit
            //Pimp slap
            //Fuck off 9000
            //Communism
            //Presidential Love Tap
            //No tears only dreams
            //https://pokemondb.net/move/all
        ]
    },
}

function show(){
    let html =`
        <div class="opponent">
            <h1 class="attackMessage playerM">${model.opponent.attackMessage}</h1>
            <img class="bImg" src="Bobama.gif" alt="Dis is boss">
            <progress id="opponentHP" class="hpBar bossBar" value="${model.opponent.hp}" max ="100"></progress>
            <label for="opponentHP">${model.opponent.hp}</label>
        </div>`;
        
    html +=`
        <h1 class="winLossMessage">${model.winLossMessage}</h1>
        <div class="player">
            <img class="pImg" src="Player2.gif" alt="Dis is player">
            <progress id="playerHP" class="hpBar playerBar" value="${model.player.hp}" max ="100"></progress>
            <label for="playerHP">${model.player.hp}</label>
    
            <div class="attackContainer">`;
            for (i in model.player.attacks){
                html +=`<div class="attackBtn" onclick="playerAttack(${i})">${model.player.attacks[i].name}</div>`;
            }
    html +=`
            </div>
            <h1 class="attackMessage">${model.player.attackMessage}</h1>
        </div>`;
                   
    document.getElementById('app').innerHTML = html;
}



function playerAttack(i){
    if (model.disabled){return}
    else{
        model.disabled = true;
        
        let player=model.player;
        let opponent=model.opponent;
        opponent.attackMessage='';

        let attack=player.attacks[i];
        let criticalDamageFactor=(Math.random()<player.criticalChance) ? 2 : 1;
        let damage=player.basePower*attack.damage*criticalDamageFactor;

        opponent.hp -= damage;
        if (opponent.hp<=0){
            opponent.hp=0;
            model.winLossMessage="Game Won!";
        } else {
            setTimeout(() => {
                opponentAttack(Math.floor(Math.random()*opponent.attacks.length));
            }, Math.floor(Math.random() * 4000));
        //     opponentAttack(Math.floor(Math.random()*opponent.attacks.length));
        }
        player.attackMessage=`<i>${player.name}</i> used <i>${attack.name}</i> and dealt <i>${damage}</i> damage.`;
        show();
    }
}
function opponentAttack(i){
    let player=model.player;
    let opponent=model.opponent;

    let attack=opponent.attacks[i];
    let chanceToMissFactor=(Math.random()<opponent.chanceToMiss) ? 0 : 1;
    let damage=opponent.basePower*attack.damage*chanceToMissFactor;

    player.hp -= damage;
    if (player.hp<=0){
        player.hp=0;
        model.winLossMessage="Game Over!";
        model.disabled = true;
    }
    else {
        model.disabled = false;
    }
    opponent.attackMessage=`<i>${opponent.name}</i> used <i>${attack.name}</i> and dealt <i>${damage}</i> damage.`;
    show();
}
