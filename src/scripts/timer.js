function countdown(targetDate) {
  var targetTime = new Date(targetDate).getTime();
  var countdownElement = document.getElementById("relogio");

  var countdownInterval = setInterval(function () {
    var currentTime = new Date().getTime();
    var remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      countdownElement.textContent = "Contagem regressiva concluída!";
      clearInterval(countdownInterval);
      return;
    }

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    var timeString =
      days +
      "d " +
      formatTime(hours) +
      "h " +
      formatTime(minutes) +
      "m " +
      formatTime(seconds) +
      "s";
    countdownElement.textContent = timeString;
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Exemplo de uso
var targetDate = "2023-10-10T23:59:00";
countdown(targetDate);
