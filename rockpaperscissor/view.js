show();
function show(){
    app.innerHTML = `
    <button onclick="chooseAction(this, 'rock')">Rock</button>
    <button onclick="chooseAction(this, 'paper')">paper</button>
    <button onclick="chooseAction(this, 'scissor')">scissor</button>
    <div>${pChoice}</div>`;
}