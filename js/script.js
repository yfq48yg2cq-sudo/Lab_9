function init() {
  //add your javascript between these two lines of code

  const inputBox = document.getElementById("entryinput");
  const alertButton = document.getElementById("entrybutton");
  const outputText = document.getElementById("textoutput");

  alertButton.addEventListener("click", function () {
    let userMessage = inputBox.value.trim();

    alert("Ali Agha: " + userMessage);

    outputText.textContent = userMessage;
  });
}

window.addEventListener("load", init);
