var canvas, ctx, flag = false,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_flag = false;

var x = "black",
  y = 2;

function init() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;

  canvas.addEventListener("mousemove", function(e) {
    findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function(e) {
    findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function(e) {
    findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function(e) {
    findxy('out', e)
  }, false);
}

function color(obj) {
  switch (obj.id) {

    case "blue":
      x = "blue";
      break;
    case "red":
      x = "red";
      break;

    case "black":
      x = "black";
      break;
    case "white":
      x = "white";
      break;
  }
  if (x == "white") y = 14;
  else y = 2;

}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

function erase() {
  var m = confirm("Want to clear");
  if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
  }
}

function save() {
  document.getElementById("canvasimg").style.border = "1px solid";
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasimg").src = dataURL;
  document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
}
}