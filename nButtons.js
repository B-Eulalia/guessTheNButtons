function addBtn() {
  let numberBtn = document.getElementById("numberBtn").value;
  for (let i = 1; i <= numberBtn; ++i) {
    let createBtn = document.createElement("button");
    createBtn.innerHTML = "Click" + i;
    createBtn.setAttribute("id",i);
    document.getElementById("btnCreate").appendChild(createBtn);
    createBtn.style.backgroundColor = 'dodgerblue';
    document.getElementById("btn").disabled = true;
  }
  let random = Math.floor((Math.random() * numberBtn) + 1);
  winnerButton(random, numberBtn);
}

function winnerButton(random,numberBtn) {
  for (let i = 1; i <= numberBtn; ++i) {
    document.getElementById(i).onclick = function() { myFunction() };
    function myFunction() {
      if (random == i) {
        document.getElementById("message").innerHTML = "<h1>WINNER</h1>";
      } else {
        document.getElementById("message").innerHTML = "<h1>LOSER</h1>";
      }
    }
  }
}
