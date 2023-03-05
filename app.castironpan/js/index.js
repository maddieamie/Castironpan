
function init() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height; }

resize()

function resize () {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

const toolbox = document.querySelectorAll("option-tool");
const fillColor = document.querySelector("fill-color");
const sizeSlider = document.querySelector("size-slider");
const colorButtons = document.querySelectorAll("coption");
const colorPicker = document.querySelector("color-picker");
const clearCanvas = document.querySelector("clear-canvas");
const saveImg = document.querySelector("save-img");


var pos = {x: 0, y: 0};
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clintY;
}

function draw (e) {
 if (e.buttons !==1) return;

 var color = colorButtons.value, colorPicker,getPropertyValue;
 ctx.beginPath ();

 ctx.lineWidth = sizeSlider;
 ctx.lineCap = "round";
 ctx.strokeStyle = color;

 ctx.moveTo (pos.x, pos.y);
 setPosition(e);
 ctx.lineTo(pos.x, pos.y);

 ctx.stroke();

}

window.addEventListener("resize", resize)
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);


if(toolbox === "brush") {
  context.strokeStyle = color;
  context.lineTo(e.offsetX, e.offsetY)
  context.stroke()
}
else(toolbox === "eraser") {
  context.strokeStyle = '#fafaf9'; color;
  context.lineTo (e.offsetX, e.offsetY);
}



toolbox.forEach (button => {
  button.addEventListener("click", () => {
  document.querySelector("coption", "option-tool");
  button.classList.add("active");
            toolbox = button.id;
        });
    });

sizeSlider.addEventListener("change", lineWidth = sizeSlider.value);
    

colorButtons.forEach (button => {
  button.addEventListener("click", () => {
  document.querySelector("cptions", "color-picker");
  button.classList.add("selected");
  color = window.getComputedStyle(button).getPropertyValue('background-color');
        }
        );
    });

colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click ();
    });

clearCanvas.addEventListener("click", () => {
  context.clearRect (0, 0, canvas.width, canvas.height);
  setCanvasBackground();
    });


window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground ();
});


saveImg.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = '${Date.now()}.jpg';
  link.href = canvas.toDataURL();
  link.click();
    });

localStorage.setItem(canvas, canvas.toDataURL());

var toDataURL = localStorage.getItem("can");
var image = new Image;
image.src =dataURL;
image.onload = function () {
  ctx.drawImage(image, 0, 0);
}

init();



   
 



