let cronometroID; // ID del intervalo del cronómetro
let segundos = 0; // Valor de los segundos del cronómetro
let minutos = 0; // Valor de los minutos del cronómetro
let horas = 0; // Valor de las horas del cronómetro

function iniciarCronometro() {
  cronometroID = setInterval(function() {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    actualizarCronometro();
  }, 1000); // Actualizar cada 1 segundo (1000 milisegundos)
}

function pausarCronometro() {
  clearInterval(cronometroID);
}

function resetearCronometro() {
  clearInterval(cronometroID);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarCronometro();
}

function actualizarCronometro() {
  const cronometroElement = document.getElementById('cronometro');
  cronometroElement.textContent = `${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;
}

function agregarCeros(valor) {
  return valor < 10 ? '0' + valor : valor;
}