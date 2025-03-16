const finalCanvas = document.getElementById("finalCanvas");
const ctx = finalCanvas.getContext("2d");
const downloadBtn = document.getElementById("download-btn");
const colorButtons = document.querySelectorAll(".color-btn");

let selectedFrameColor = "img/frame1.png";

let capturedPhotos = JSON.parse(sessionStorage.getItem("capturedPhotos")) ||[];

if(capturedPhotos.length === 0){
    console.error("No Photos found");
}

const canvasWidth = 240;
const imageHeight = 160;
const spacing = 10;
const framePadding = 10;
const logoSpace = 100;

finalCanvas.width = canvasWidth;
finalCanvas.height = framePadding + (imageHeight + spacing) * capturedPhotos.length + logoSpace;

function drawCollage(){
    const background = new Image();
    background.src = selectedFrameColor;

    background.onload = () => {
        ctx.clearRect(0,0, finalCanvas.width, finalCanvas.height);
        ctx.drawImage(background, 0,0, finalCanvas.width, finalCanvas.height);

        capturedPhotos.forEach((photo,index) =>{
            const img = new Image();
            img.src = photo;

            img.onload = () => {
                const x = framePadding;
                const y = framePadding + index * (imageHeight + spacing);
                ctx.drawImage(img, x, y, canvasWidth - 2 * framePadding, imageHeight);
            };
            img.onerror = () => console.error(`Failed to load image ${index + 1}`);
        });

        drawLogo();
       
    }
    background.onerror = () => console.error("Failed to load background image.");
}

function drawLogo(){
    const logo = new Image();
    logo.src = "img/Kilabooth.png";

    logo.onload = () =>{
        const logoWidth = 200;
        const logoHeight = 40;
        const logoX = (canvasWidth - logoWidth) / 2;
        const logoY = (finalCanvas.height - logoSpace + 10);
        ctx.drawImage(logo,logoX,logoY,logoWidth,logoHeight);
    };
    logo.onerror = () => console.error("Failed to load logo image.");
}


colorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        selectedFrameColor = event.target.getAttribute("data-color");
        drawCollage();
    })
})

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = finalCanvas.toDataURL("image/png");
    link.download = "CPET-PhotoBooth.png"
    link.click();
});

drawCollage();