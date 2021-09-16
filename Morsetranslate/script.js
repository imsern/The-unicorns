model = {
    alfabetArray: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z','æ','ø','å','.','!','0','1','2','3','4','5','6','7','8','9',' ',','],

    morseArray: ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
                '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
                '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
                '-.--', '--..', '·−·−', '−−−·', '·−−·−','<br />','!','0','1','2','3','4','5','6','7','8','9',' / ',','],
    
    morseText: "",

    inputField: "",

}



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
    let txtArray = txt.split("");
    for (letter of txtArray) {
            let morseIndex=model.alfabetArray.indexOf(letter);
            newTxt +=model.morseArray[morseIndex];
    }
    model.morseText = newTxt;
    show();
}

function play() {
    var audio = new Audio("SFX/Short.mp3");
    audio.play();
}

// if (typeof txt === 'string' || txt instanceof String){
//     //its a string
//     else{
//         //ikke en string
//     }
// }