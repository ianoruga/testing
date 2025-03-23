const shutterSound = new Audio("shutter.mp3");
const countdownSound = new Audio("countdown.mp3");
const video = document.getElementById("video");
const photo_num = document.getElementById("photo_num");
const countdown = document.getElementById("countdown");
const counter = document.getElementById("counter");
const photo_cont = document.querySelector(".photo_cont");
const start_button = document.getElementById("start");
const frame_page_button = document.getElementById("frame_page");
const retake = document.getElementById("retake");

const capturedPhotos = [];
let capturedCount = 0;
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

const isMobile = window.innerWidth <= 600;

const videoConstraints = {
  video: {
    facingMode: "user",
  },
};

video.setAttribute("playsinline", true);
video.setAttribute("autoplay", true);
video.setAttribute("muted", true);
function triggerShutterAnnimation() {
  shutterOverlay.style.opacity = "1";
  shutterSound.play();
  setTimeout(() => {
    shutterOverlay.style.opacity = "0";
  }, 100);
}

navigator.mediaDevices
  .getUserMedia(videoConstraints)
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => console.error("Camera access denied", err));

function startCapture() {
  let totalPhotos = parseInt(photo_num.value);
  if (photo_num.value == 4) {
    let timeLeft = 5;
    countdown.textContent = timeLeft;
    if (capturedCount == 4) {
      sessionStorage.setItem("capturedPhotos", JSON.stringify(capturedPhotos));
      countdown.style.display = "none";
      start_button.style.display = "none";
      frame_page_button.style.display = "block";
      photo_num.disabled = true;
      retake.disabled = false;

      return;
    }
    const countdownInterval = setInterval(() => {
      timeLeft--;

      countdown.textContent = timeLeft;
      countdownSound.play();

      if (timeLeft === 1) {
        triggerShutterAnnimation();
      }
      if (timeLeft < 1) {
        clearInterval(countdownInterval);

        capturePhoto();
        capturedCount++;
        counter.textContent = `${capturedCount}/4`;
        startCapture();
      }
    }, 1000);
  } else if (photo_num.value == 3) {
    let timeLeft = 5;
    countdown.textContent = timeLeft;
    if (capturedCount == 3) {
      sessionStorage.setItem("capturedPhotos", JSON.stringify(capturedPhotos));
      countdown.style.display = "none";
      start_button.style.display = "none";
      frame_page_button.style.display = "block";
      photo_num.disabled = true;
      retake.disabled = false;
      return;
    } else {
      const countdownInterval = setInterval(() => {
        timeLeft--;

        countdown.textContent = timeLeft;
        countdownSound.play();

        if (timeLeft === 1) {
          triggerShutterAnnimation();
        }
        if (timeLeft < 1) {
          clearInterval(countdownInterval);

          capturePhoto();
          capturedCount++;
          counter.textContent = `${capturedCount}/3`;
          startCapture();
        }
      }, 1000);
    }
  } else if (photo_num.value == 2) {
    let timeLeft = 5;
    countdown.textContent = timeLeft;
    if (capturedCount == 2) {
      sessionStorage.setItem("capturedPhotos", JSON.stringify(capturedPhotos));
      countdown.style.display = "none";
      start_button.style.display = "none";
      frame_page_button.style.display = "block";
      photo_num.disabled = true;
      retake.disabled = false;
      return;
    } else {
      const countdownInterval = setInterval(() => {
        timeLeft--;

        countdown.textContent = timeLeft;
        countdownSound.play();

        if (timeLeft === 1) {
          triggerShutterAnnimation();
        }
        if (timeLeft < 1) {
          clearInterval(countdownInterval);

          capturePhoto();
          capturedCount++;
          counter.textContent = `${capturedCount}/2`;
          startCapture();
        }
      }, 1000);
    }
  } else if (photo_num.value == 1) {
    let timeLeft = 5;
    countdown.textContent = timeLeft;
    if (capturedCount == 1) {
      countdown.style.display = "none";
      start_button.style.display = "none";
      frame_page_button.style.display = "block";
      photo_num.disabled = true;
      return;
    } else {
      const countdownInterval = setInterval(() => {
        timeLeft--;

        countdown.textContent = timeLeft;
        countdownSound.play();

        if (timeLeft === 1) {
          triggerShutterAnnimation();
        }
        if (timeLeft < 1) {
          clearInterval(countdownInterval);
          capturePhoto();
          capturedCount++;
          counter.textContent = `${capturedCount}/1`;
          countdown.style.display = "none";
          start_button.style.display = "none";
          frame_page_button.style.display = "block";
          photo_num.disabled = true;
          retake.disabled = false;
          sessionStorage.setItem(
            "capturedPhotos",
            JSON.stringify(capturedPhotos)
          );
          return;
        }
      }, 1000);
    }
  } else {
    console.log("error");
  }
}

function capturePhoto() {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0);

  const photoData = canvas.toDataURL("image/png");
  capturedPhotos.push(photoData);
  console.log("Captured Photos:", capturedPhotos);

  displayCapturedPhoto(photoData);
}

function displayCapturedPhoto(photoData) {
  const imgElement = document.createElement("img");
  imgElement.src = photoData;

  const displayWidth = 300;
  const aspectRatio = video.videoHeight / video.videoWidth;
  imgElement.style.width = `${displayWidth}px`;
  imgElement.style.height = `${displayWidth * aspectRatio}px`;
  imgElement.style.border = "2px solid";
  photo_cont.appendChild(imgElement);
}

function p4() {
  window.location.href = "4pics.html";
}
