const light = document.getElementById('lightsOut');
const puzzle = document.getElementById('puzzleGame');

function nextPage(element, oppgave) {
    if (oppgave == 1) {
        location.href='https://imsern.github.io/The-unicorns/NyesteMod/';
    }
    else if (oppgave == 2) {
        location.href='https://imsern.github.io/The-unicorns/Unicorn%20puzzle/';
    }
    else if (oppgave == 0) {
        location.href='https://imsern.github.io/The-unicorns/';
    }
    else if (oppgave == 3) {
        location.href='https://imsern.github.io/The-unicorns/WordChooser';
    }
    else if (oppgave == 4) {
        location.href='https://imsern.github.io/The-unicorns/rockpaperscissor';
    }
}
