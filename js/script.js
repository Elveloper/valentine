document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  let noCount = 0;
  
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const messageText = document.getElementById("message");
  const messageImg = document.getElementById("messageImg");

  let frases = [
    { text: "Di sí por favor", img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" },
    { text: "Piénsalo de nuevo.", img: "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif" },
    { text: "Vamos, atrévete a decir que sí.", img: "https://www.gifmaniacos.es/wp-content/uploads/2019/05/gatitos-kawaii-gifmaniacos.es-19.gif" },
    { text: "No tengas miedo, será genial.", img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif" },
    { text: "Confía en mí, será divertido.", img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif" },
    { text: "No tengas dudas, te hará sonreír.", img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif" },
    { text: "Te prometo que será inolvidable.", img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif" },
    { text: "No dejes que el miedo te detenga.", img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" },
    { text: "Confía en el destino, nos está dando una señal.", img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif" },
    { text: "No te arrepentirás.", img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif" }
  ];

  function obtenerMensajeAleatorio() {
    if (noCount >= frases.length) {
      frases = frases.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente la lista cuando ya se mostraron todas
      noCount = 0;
    }
    return frases[noCount++];
  }

  // Si presiona "Sí", lo redirige a la carta
  yesButton.addEventListener("click", function () {
    window.location.href = "carta.html";
  });

  // Si presiona "No", el botón "Sí" se agranda y se muestra un mensaje divertido con imagen
  noButton.addEventListener("click", function () {
    let mensajeActual = obtenerMensajeAleatorio();
    
    // Aumentar tamaño del botón "Sí"
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 5}px`;
    yesButton.style.padding = "15px 25px";

    // Mostrar mensaje e imagen
    messageText.innerText = mensajeActual.text;
    messageImg.src = mensajeActual.img;
    messageImg.classList.remove("hidden");
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
    e.preventDefault();
  }
});
