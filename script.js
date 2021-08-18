function klikk(b1,b2,b3,b4){
    onOff(document.getElementById(b1));
    onOff(document.getElementById(b2));
    onOff(document.getElementById(b3));
    onOff(document.getElementById(b4));
}


var r1c1=0;
var r1c2=0;
var r1c3=0;
var r1c4=0;
var r1c5=0;

var r2c1=0;
var r2c2=0;
var r2c3=0;
var r2c4=0;
var r2c5=0;

var r3c1=0;
var r3c2=0;
var r3c3=0;
var r3c4=0;
var r3c5=0;

var r4c1=0;
var r4c2=0;
var r4c3=0;
var r4c4=0;
var r4c5=0;

var r5c1=0;
var r5c2=0;
var r5c3=0;
var r5c4=0;
var r5c5=0;
function onOff(x){
    //Hvis den ikke er lys, gjør den lys
    if (let == 0){
        document.getElementById(x).style.backgroundColor ="rgb(100,100,100)";
        let x=1;
    }
    //Hvis den er lys så gjør den mørk A
    else {
        document.getElementById(x).style.backgroundColor ="rgb(50,50,50)";
        x=0;
    }
}

function farge(){
    if (id='r1c1'){
        onOff();
    }
}


