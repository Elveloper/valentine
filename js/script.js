document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  let noCount = 0;
  
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const messageText = document.getElementById("message");

  const mensajesDivertidos = [
    "No",
    "¿Segura?",
    "Vamos, dime que sí 🥺",
    "Piénsalo bien 😳",
    "No seas así 😭",
    "Mira que me pongo triste... 🥺",
    "Va a ser tu última oportunidad 👀",
    "Dale, di que sí 🥰",
    "No te hagas el difícil 😏",
    "Bueno, te dejo pensar... pero di que sí 😜",
  ];

  function generarMensaje(noCount) {
    return mensajesDivertidos[Math.min(noCount, mensajesDivertidos.length - 1)];
  }

  // Si presiona "Sí", lo redirige a la carta
  yesButton.addEventListener("click", function () {
    window.location.href = "carta.html";
  });

  // Si presiona "No", el botón "Sí" se agranda y se muestra un mensaje divertido
  noButton.addEventListener("click", function () {
    noCount++;
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    
    yesButton.style.fontSize = `${currentSize + 5}px`;
    yesButton.style.padding = "15px 25px"; // Aumenta un poco el tamaño del botón
    
    messageText.innerText = generarMensaje(noCount);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});
