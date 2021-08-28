const light = document.getElementById('lightsOut');
const puzzle = document.getElementById('puzzleGame');

function nextPage(element, oppgave) {
    if (oppgave == 1) {
        location.href='https://imsern.github.io/The-unicorns/NyesteMod/';
    }
    else if (oppgave == 2) {
        location.href='https://imsern.github.io/The-unicorns/Unicorn%20puzzle/';
    }
    console.log(element);
}
