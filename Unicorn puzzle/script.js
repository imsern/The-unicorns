const brett=
['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4'];

const brikker=
['p1','p2','p3','p4','q1','q2','q3','q4','r1','r2','r3','r4','s1','s2','s3','s4'];

var bildeNr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var valgtbrikke='';
var forrigebrikke;

function fyllBrikker(){
    for (i in brikker){
        document.getElementById(brikker[i]).innerHTML=bildeNr[i];
    }
}
function velgbrikke(brikke){
    console.log(brikke.innerHTML);
    for (i in brikker){
        document.getElementById(brikker[i]).classList.remove('valgtbrikke');
    }
    if (brikke.innerHTML!=''){
        valgtbrikke=brikke.innerHTML;
        forrigebrikke=brikke.id;
        brikke.classList.add('valgtbrikke');
    }
}
function limInn(rute){
    if (rute.classList.contains('harbilde')==false && valgtbrikke !=''){
        rute.innerHTML=valgtbrikke;
        valgtbrikke='';
        document.getElementById(forrigebrikke).classList.remove('valgtbrikke');
        document.getElementById(forrigebrikke).innerHTML='';
        rute.classList.add('harbilde');
        rute.classList.add(forrigebrikke);
        var victorycheck=0;
        for (i in brett){
            var x=document.getElementById(brett[i])
            if (x.classList.contains(brikker[i])) victorycheck++;
        if (victorycheck==brett.length) alert('HAHAHAHAHA');  //monkaS
        }
    }
}
function shuffle(array) {
    var currentIndex = bildeNr.length, randomIndex;

    //Så lenge det er elementer igjen å shuffle...
    while (currentIndex != 0) {
        //velg et random element av de som er igjen
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        //bytt det ut med current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];  //wtf er det her?
    }
    return array;
    console.log(bildeNr)
}


