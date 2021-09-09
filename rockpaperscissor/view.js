show();
function show(){
    app.innerHTML = `
    <button onclick="chooseAction('rock')">Rock</button>
    <button onclick="chooseAction('paper')">paper</button>
    <button onclick="chooseAction('scissor')">scissor</button>
    <div>${pChoice}</div>`;
}