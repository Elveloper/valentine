document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
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

document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio("./assets/love.mp3");

  // Intentar reproducir automáticamente
  const playAudio = () => {
    audio.play().catch(() => {
      console.log("Reproducción bloqueada. Esperando interacción del usuario.");
      
      // Agregar evento para iniciar audio al primer clic, toque o tecla presionada
      const userInteractionHandler = () => {
        audio.play();
        document.removeEventListener("click", userInteractionHandler);
        document.removeEventListener("keydown", userInteractionHandler);
        document.removeEventListener("touchstart", userInteractionHandler);
      };

      document.addEventListener("click", userInteractionHandler, { once: true });
      document.addEventListener("keydown", userInteractionHandler, { once: true });
      document.addEventListener("touchstart", userInteractionHandler, { once: true });
    });
  };

  playAudio();
});
