function countdown(days) {
  var totalSeconds = days * 24 * 60 * 60; // Convertendo dias para segundos
  var countdownElement = document.getElementById("relogio");

  var savedSeconds = localStorage.getItem("countdownSeconds"); // Recupera os segundos salvos
  if (savedSeconds !== null) {
    totalSeconds = parseInt(savedSeconds, 10); // Converte para inteiro
  }

  var countdownInterval = setInterval(function () {
    var remainingDays = Math.floor(totalSeconds / (24 * 60 * 60));
    var remainingHours = Math.floor(
      (totalSeconds % (24 * 60 * 60)) / (60 * 60)
    );
    var remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var remainingSeconds = totalSeconds % 60;

    var timeString =
      remainingDays +
      "d " +
      remainingHours +
      "h " +
      remainingMinutes +
      "m " +
      remainingSeconds +
      "s";
    countdownElement.textContent = timeString;

    if (totalSeconds === 0) {
      countdownElement.textContent = "Contagem regressiva concluída!";
      clearInterval(countdownInterval); // Parando o intervalo de contagem regressiva
    }

    totalSeconds--;

    // Salva os segundos restantes no localStorage
    localStorage.setItem("countdownSeconds", totalSeconds.toString());
  }, 1000);
}

// Exemplo de uso
var dias = 5;
countdown(dias);
