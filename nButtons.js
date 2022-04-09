function createButtons() {
  let buttonIndex = document.getElementById("numberBtn").value;
  for (let i = 1; i <= buttonIndex; ++i) {
    let createBtn = document.createElement("button");
    createBtn.innerHTML = "Click" + i;
    createBtn.setAttribute("id",i);
    document.getElementById("btnCreate").appendChild(createBtn);
    createBtn.style.backgroundColor = 'dodgerblue';
    document.getElementById("btn").disabled = true;
  }
  let winningBtn = Math.floor((Math.random() * buttonIndex) + 1);
  for (let i = 1; i <= buttonIndex; ++i) {
    document.getElementById(i).onclick = function() { checkWinner(winningBtn, i) };
  }
}

function checkWinner(winningBtn, i) {
  if (winningBtn == i) {
    document.getElementById("message").innerHTML = "<h1>WINNER</h1>";
  }  else {
    document.getElementById("message").innerHTML = "<h1>LOSER</h1>";
  }
}
