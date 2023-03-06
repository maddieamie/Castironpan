var canvas, ctx, flag = false,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_flag = false;

var x = "v1",
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

    case "v1":
      x = "v1";
      break;
    case "v2":
      x = "v2";
      break;

    case "v3":
      x = "v3";
      break;
    case "v4":
      x = "v4";
      break;
    case "v5":
        x = "v5";
        break;
  }
  if (x == "v1") y = 14;
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
  document.getElementById("canvasimg").style.border = "3px solid";
  var dataURL = canvas.toDataURL();
  document.getElementById("canvasimg").src = dataURL;
  document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
    if (res == 'down') {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
  
      flag = true;
      dot_flag = true;
      if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      }
    }
    if (res == 'up' || res == "out") {
      flag = false;
    }
    if (res == 'move') {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
      }
    }
  }
  init();