



    const canvas = document.getElementById("drawing-canvas");


    const context = canvas.getContext("2d");
    resize ();


    function resize() {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;
    }

const toolbox = document.querySelectorAll("option-tool"),
fillColor = document.querySelector("fill-color"),
sizeSlider = document.querySelector("size-slider"),
colorButtons = document.querySelectorAll("color-options"),
colorPicker = document.querySelector("color-picker"),
clearCanvas = document.querySelector("clear-canvas"),
saveImg = document.querySelector("save-img");


    let prevMouseX, prevMouseY, snapshot,
    isDrawing = false,
    selectedTool = "brush",
    brushWidth = 5,
    selectedColor = "#000";

    const setCanvasBackground = () => {
        context.fillStyle = "#fafaf9";
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.fillStyle = selectedColor; }
    

    const startDraw = (e) => {
        isDrawing =true;
        
        prevMouseX = e.offsetX;
        prevMouseY = e.offsetY;
       
        context.beginPath (); 
        context.lineWidth = brushWidth;
        context.strokeStyle = selectedColor;
        context.fillStyle = selectedColor;
       
        snapshot = context.getImageData (0, 0, canvas.width, canvas.height);
        }

    const drawing = (e) => {
        if (!isDrawing) return;
        context.putImageData (snapshot, 0, 0);
        }

    if(selectedTool === "brush") {
        context.strokeStyle = selectedColor;
        context.lineTo (e.offsetX, e.offsetY);
        context.stroke ();
    }
    else (selectedTool === "eraser"); {
        context.strokeStyle = "#fafaf9" ; selectedColor;
        context.lineTo (e.offsetX, e.offsetY);
    }


    toolbox.forEach (button => {
        button.addEventListener("click", () => {
            document.querySelector("option", "option-tool");
            button.classList.add("active");
            selectedTool = button.id;
        });
    });

    sizeSlider.addEventListener("change", brushWidth = sizeSlider.value);
    

    colorButtons.forEach (button => {
        button.addEventListener("click", () => {
            document.querySelector("color-options", "color-picker");
            button.classList.add("selected");
            selectedColor = window.getComputedStyle(button).getPropertyValue("background-color");
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


    window.addEventListener("resize", resize);

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



    if (isDrawing = true) {
 
        window.onload = function() {
            localStorage.setItem("canvasdrawing", $("drawing"), $("snapshot").value());
        }
      
        var canvasdrawing = localStorage.getItem("canvasdrawing");
        console.log(canvasdrawing); 
    }

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", drawing);
    canvas.addEventListener("mouseup"), () => isDrawing = false;

   
 



