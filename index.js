// Créer un événement à la validation du form pour lancer le compte à rebours
const form = document.getElementById("form");
const btn = document.getElementById("start");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  totalSeconds = choice.value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  const interval = setInterval(() => {
    countdownDisplay.innerHTML = `${minutes}:${seconds}`;
    if ((minutes == 0) & (seconds == 0)) clearInterval(interval);
    if (seconds >= 1) {
      seconds--;
    } else if (seconds == 0) {
      minutes--;
      seconds = 59;
    }

    //     minutes--;
  }, 1000);
});
