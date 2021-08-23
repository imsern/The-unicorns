//5x5 kode:

//5x5 array
const rc = [
  "r1c1",
  "r1c2",
  "r1c3",
  "r1c4",
  "r1c5",
  "r2c1",
  "r2c2",
  "r2c3",
  "r2c4",
  "r2c5",
  "r3c1",
  "r3c2",
  "r3c3",
  "r3c4",
  "r3c5",
  "r4c1",
  "r4c2",
  "r4c3",
  "r4c4",
  "r4c5",
  "r5c1",
  "r5c2",
  "r5c3",
  "r5c4",
  "r5c5",
];

//5x5 array
const lys = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

//anntall klikk
var clicks = 0;

//oppdater antall klikk og sjekk om du har vunnet
function klikk(liste) {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  for (a in liste) {
    onOff(liste[a]);
  }
  testVictory();
}

//slår av og på lys i 5x5
function onOff(x) {
  if (lys[x] == 0) {
    document.getElementById(rc[x]).style.backgroundColor = "rgb(37, 192, 37)";
    document.getElementById(rc[x]).style.boxShadow = "none";
    lys[x] = 1;
  } else {
    document.getElementById(rc[x]).style.backgroundColor = "rgb(255, 5, 5)";
    document.getElementById(rc[x]).style.boxShadow = "none";
    lys[x] = 0;
  }
}

//win condition, sjekk om alle rutene er lyst opp
function testVictory() {
  l = 0;
  for (i in lys) {
    l += lys[i];
  }
  if (l == 25) {
    document.getElementById("fivebyfive").style.display = "hide";
    document.getElementById("fivebyfivedance").style.display = "grid"
    document.getElementById("victory").style.display = "block"
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3x3 Kode:

//3x3 array
const rk = [
  "r1k1",
  "r1k2",
  "r1k3",
  "r2k1",
  "r2k2",
  "r2k3",
  "r3k1",
  "r3k2",
  "r3k3",
];

//3x3 array
const lys2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//oppdater antall klikk og sjekk om du har vunnet
function klikk3x3(liste) {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  for (a in liste) {
    onOff3x3(liste[a]);
  }
  testVictory3x3();
}

//slår av og på lys i 3x3
function onOff3x3(x) {
  if (lys2[x] == 0) {
    document.getElementById(rk[x]).style.backgroundColor = "rgb(37, 192, 37)";
    lys2[x] = 1;
  } else {
    document.getElementById(rk[x]).style.backgroundColor = "rgb(255, 5, 5)";
    lys2[x] = 0;
  }
}

//win condition, sjekk om alle rutene er lyst opp på 3x3 versjonen
function testVictory3x3() {
  l = 0;
  for (i in lys2) {
    l += lys2[i];
  }
  if (l == 9) {
    document.getElementById("threebythree").style.display = "hide";
    document.getElementById("threebythreedance").style.display = "grid";
    document.getElementById("victory").style.display = "block";
  }
}

//Reset board
function reset() {
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("victory").style.display = "none";
    document.getElementById("fivebyfivedance").style.display ="none";
    document.getElementById("threebythreedance").style.display ="none";
    document.getElementById("fivebyfive").style.backgroundColor =
      "rgb(30,30,30)";
      document.getElementById("threebythree").style.backgroundColor =
      "rgb(30,30,30)";
    for (i in rc){
        document.getElementById(rc[i]).style.backgroundColor="rgb(255, 5, 5)";
        lys[i]=0;
    }
    for (i in rk){
        document.getElementById(rk[i]).style.backgroundColor="rgb(255, 5, 5)";
        lys2[i]=0;
    } 
}
    



//bytt til 3x3 brettet og skru av 5x5 brettet
//skru av 3x3 knappen og skru på 5x5 knappen
function btn3() {
  document.getElementById("threebythree").style.display = "grid";
  document.getElementById("fivebyfive").style.display = "none";
  document.getElementById("fivebyfivedance").style.display = "none";
  document.getElementById("threebythreedance").style.display =  "none";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
  document.getElementById("victory").style.display = "none";
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
  for (i in rc){
    document.getElementById(rc[i]).style.backgroundColor="rgb(255, 5, 5)";
    lys[i]=0;
}}

//bytt til 5x5 brettet og skru av 3x3 brettet
//skru av 5x5 knappen og skru på 3x3 knappen
function btn5() {
  document.getElementById("fivebyfive").style.display = "grid";
  document.getElementById("fivebyfivedance").style.display = "none";
  document.getElementById("threebythree").style.display = "none";
  document.getElementById("threebythreedance").style.display= "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn1").style.display = "block";
  document.getElementById("victory").style.display = "none";
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;

  for (i in rk){
    document.getElementById(rk[i]).style.backgroundColor="rgb(255, 5, 5)";
    lys2[i]=0;
}}
