const finalCanvas = document.getElementById("finalCanvas");
const colorButtons = document.querySelectorAll(".color-btn");
const downloadBtn = document.getElementById("Download");

const ctx = finalCanvas.getContext("2d");

let selectedFrameColor = "img/frame1.png";

let capturedPhotos = JSON.parse(sessionStorage.getItem("capturedPhotos")) || [];

if (capturedPhotos.length === 0) {
  console.error("No Photos Found");
}

const canvasWidth = 240;
const imageHeight = 160;
const spacing = 10;
const framePadding = 10;
const logoSpace = 100;
const headerSpace = 20;

finalCanvas.width = canvasWidth;
finalCanvas.height =
  framePadding +
  (imageHeight + spacing) * capturedPhotos.length +
  logoSpace +
  headerSpace;

function drawCollage() {
  const background = new Image();
  background.src = selectedFrameColor;

  background.onload = () => {
    ctx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);

    ctx.drawImage(background, 0, 0, finalCanvas.width, finalCanvas.height);

    capturedPhotos.forEach((photo, index) => {
      const img = new Image();
      img.src = photo;

      img.onload = () => {
        const x = framePadding;
        const y = framePadding + index * (imageHeight + spacing) + headerSpace;

        ctx.drawImage(img, x, y, canvasWidth - 2 * framePadding, imageHeight);
      };
      img.onerror = () => console.error(`Failed to load image ${index + 1}`);
    });
  };
}
colorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedFrameColor = event.target.getAttribute("data-color");

    drawCollage();
  });
});

function DL() {
  const link = document.createElement("a");
  link.href = finalCanvas.toDataURL("image/png");

  link.download = "CPET-PhotoBooth.png";

  link.click();
}
drawCollage();
console.log("Captured Photos:", capturedPhotos);
