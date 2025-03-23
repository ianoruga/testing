const video = document.getElementById("video");
const countdown = document.getElementById("countdown");
const counterEL = document.getElementById("counter");
const shutterOverlay = document.createElement("div");
shutterOverlay.style.position = "absolute";
shutterOverlay.style.top = "0";
shutterOverlay.style.left = "0";
shutterOverlay.style.width = "100%";
shutterOverlay.style.height = "100%";
shutterOverlay.style.background = "white";
shutterOverlay.style.opacity = "0";
shutterOverlay.style.transition = "opacity 0.2s ease-out";
document.body.appendChild(shutterOverlay);

const shutterSound = new Audio("shutter.mp3");
const countdownSound = new Audio("countdown.mp3");

const capturedPhotos = [];
let capturedCount = 0;

const isMobile = window.innerWidth <= 600;
const videoConstraints = {
  video: {
    facingMode: "user",
    with: isMobile ? { ideal: 480 } : { ideal: 640 },
    height: isMobile ? { ideal: 640 } : { ideal: 480 },
  },
};

video.setAttribute("playsinline", true);
video.setAttribute("autoplay", true);
video.setAttribute("muted", true);

navigator.mediaDevices
  .getUserMedia(videoConstraints)
  .then((stream) => {
    video.srcObject = stream;
    video.play();
    startCaptureProcess();
  })
  .catch((err) => console.error("Camera access denied", err));

function startCaptureProcess() {
  capturePhotoWithCountdown();
}

function capturePhotoWithCountdown() {
  if (capturedCount >= 4) {
    redirectToDownload();
    return;
  }

  let timeLeft = 5;
  countdown.textContent = timeLeft;
  counterEL.textContent = `${capturedCount}/4`;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    countdownSound.play();

    if (timeLeft === 1) {
      triggerShutterAnnimation();
    }

    if (timeLeft <= 1) {
      clearInterval(countdownInterval);
      capturePhoto();
    }
  }, 1000);
}

function capturePhoto() {
  const canvas = document.createElement("canvas");
  canvas.width = isMobile ? 480 : 640;
  canvas.height = isMobile ? 640 : 480;
  const ctx = canvas.getContext("2d");

  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  capturedPhotos.push(canvas.toDataURL("image/png"));
  capturedCount++;
  counterEL.textContent = `${capturedCount}/4`;

  setTimeout(capturePhotoWithCountdown, 1000);
}

function triggerShutterAnnimation() {
  shutterOverlay.style.opacity = "1";
  shutterSound.play();
  setTimeout(() => {
    shutterOverlay.style.opacity = "0";
  }, 100);
}

function redirectToDownload() {
  sessionStorage.setItem("capturedPhotos", JSON.stringify(capturedPhotos));
  window.location.href = "Photo_download.html";
}
