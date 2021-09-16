model = {
    alfabetArray: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z','æ','ø','å','.','!','0','1','2','3','4','5','6','7','8','9',' ',','],

    morseArray: ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
                '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
                '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
                '-.--', '--..', '·−·−', '−−−·', '·−−·−','<br />','!','0','1','2','3','4','5','6','7','8','9',' / ',','],
    
    morseText: "",

    inputField: "",

    short: new Audio("SFX/Shortv2.mp3"),
    long: new Audio("SFX/Longv2.mp3"),
};
// model.short.playbackRate = 0.4;
// model.long.playbackRate = 0.15;



const app = document.getElementById('app');
//view
function show(){
    let html = `<input class="inputDiv" type="text" onchange="txtToMorse(this.value)" value="${model.inputField}" />
                <br />`;
    
    
    html += `<div class="outputDiv">
                    <div class="txtOutput">${model.morseText}</div>
                    <div onclick="play()" class="playBtn"></div>
            </div>
            `;
    
    app.innerHTML= html;
}


// controller
function txtToMorse(txt) {
    model.inputField = txt;
    let newTxt='';
    let txtArray = txt.toLowerCase().split("");
    for (letter of txtArray) {
            let morseIndex=model.alfabetArray.indexOf(letter);
            newTxt +=model.morseArray[morseIndex] + ' ';
    }
    model.morseText = newTxt;
    show();
}
function play() {
    let splitMorse = model.morseText.split("");
    for (let i=0; i<splitMorse.length; i++) {
        if (splitMorse[i] == ".") setTimeout(function() {model.short.play()},400*i);
        if (splitMorse[i] == "-") setTimeout(function() {model.long.play()},400*i);
        setTimeout(function() {console.log(i)},400*i);
    }
}



