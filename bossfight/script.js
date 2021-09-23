// begge har hp.
// opponent skal ha chance to miss.
// player attack power<opponent attack power.
// player has chance to do critical damage (2xpower).



model={
    player: {
        name:"invincibleFantastico",
        hp: 100,
        basePower:0.8,
        criticalChance:0.1,
        attacks: [
            {name: 'Light Attack', damage: 10},
            {name: 'Dash n slash', damage: 20},
            {name: 'Flash the Bash', damage: 30},
            {name: 'Ataque Ultimo', damage: 40},
        ]
    },
    opponent: {
        name:"computador",
        hp: 100,
        basePower:1,
        chanceToMiss:0.1,
        attacks:[
            {name: '', damage: 10},
            {name: '', damage: 20},
            {name: '', damage: 30},
            {name: '', damage: 40},
        ]
    },
}

function show(){
    let html=`
        <div class="player">
        <progress id="playerHP" class="hpBar" value="${model.player.hp}" max ="100"></progress>
        <label for="playerHP">${model.opponent.hp}</label>
            <div class="attackContainer">`;
    for (i in model.player.attacks){
        html +=`
            <div class="attackBtn" onclick="playerAttack(${i})">${model.player.attacks[i].name}</div>
            `;
        }
               
    html += `</div></div>
        <div class="opponent">
            <img src="https://i.imgur.com/eR0fu10.png">
            <progress id="opponentHP" class="hpBar" value="${model.opponent.hp}" max ="100"></progress><label for="opponentHP">${model.opponent.hp}</label>
            
        </div>
    `;
    
    document.getElementById('app').innerHTML = html;
}



function playerAttack(i){
    let player=model.player;
    let attack=player.attack[i];
    let criticalDamageFactor=Math.random()<player.criticalChance ? 2 : 1;
    let damage=player.basepower*attack.damage*criticalDamageFactor;
}
function opponentAttack(i){
    let opponent=model.opponent;
    let attack=opponent.attack[i];
    let chanceToMissFactor=Math.random()<opponent.chanceToMiss ? 0 : 1;
    let damage=opponent.basepower*attack.damage*chanceToMissFactor;
}