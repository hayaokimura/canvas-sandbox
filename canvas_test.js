const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let imagePath = "image.png";
draw(canvas, imagePath);
function draw(canvas, imagePath) {
  console.log("draw");
  const image = new Image();
  image.addEventListener("load", function () {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    console.log("load!");
    //ctx.clearRect(25, 25, 100, 100);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, Math.PI * 2, true);
    ctx.arc(120, 100, 20, 0, Math.PI * 2, true);
    ctx.arc(200, 100, 20, 0, Math.PI * 2, true);
    ctx.fill();
  });
  image.src = imagePath;
}
