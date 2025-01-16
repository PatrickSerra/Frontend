const video = document.getElementById('1');
const progressBar = document.getElementById('progressBar');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function retroceder() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

function avancar() {
  video.currentTime = Math.min(video.duration, video.currentTime + 10);
}


  // Atualiza a barra de progresso conforme o vídeo é reproduzido
video.addEventListener('timeupdate', () => {
    const percentProgress = (video.currentTime / video.duration) * 100;
    progress.style.width = percentProgress + '%';
  });


// Permitir clicar na barra de progresso
progressBar.addEventListener('click', (event) => {
    const widthBar = progressBar.offsetWidth; // Largura total da barra
    const clickX = event.offsetX; // Posição do clique na barra
    const newTime = (clickX / widthBar) * video.duration; // Calcula o tempo proporcional
    video.currentTime = newTime; // Define o novo tempo do vídeo
});
    