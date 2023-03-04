

// CANVAS STRUCTURE ------
    // Create canvas var with id
    const canvas = document.getElementById("drawing-canvas");

    // Set canvas to correct size on 2d
    const context = canvas.getContext("2d");
    resize ();

    // resize canvas with window
    function resize() {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;
    }

// TOOLBOX
const toolbox = document.querySelectorAll("option-tool"),
fillColor = document.querySelector("fill-color"),
sizeSlider = document.querySelector("size-slider"),
colorButtons = document.querySelectorAll("color-options"),
colorPicker = document.querySelector("color-picker"),
clearCanvas = document.querySelector("clear-canvas"),
saveImg = document.querySelector("save-img");

// DRAW FUNCTIONS & LISTENERS
    // previous global default values change
    let prevMouseX, prevMouseY, snapshot,
    isDrawing = false,
    selectedTool = "brush",
    brushWidth = 5,
    selectedColor = "#000";

    const setCanvasBackground = () => {
        context.fillStyle = "#fafaf9";
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.fillStyle = selectedColor; }
    
    // Drawing function
    const startDraw = (e) => {
        isDrawing =true;
        // remap prevous mouse position to current
        prevMouseX = e.offsetX;
        prevMouseY = e.offsetY;
        // drawing path with current presets
        context.beginPath (); 
        context.lineWidth = brushWidth;
        context.strokeStyle = selectedColor;
        context.fillStyle = selectedColor;
        //  avoid canvas drag using snapshot value
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

    // button clicks for tools
    toolbox.forEach (button => {
        button.addEventListener("click", () => {
            document.querySelector("option", "option-tool");
            button.classList.add("active");
            selectedTool = button.id;
        });
    });

    sizeSlider.addEventListener("change", brushWidth = sizeSlider.value);
    
    // button clicks for color choosers
    colorButtons.forEach (button => {
        button.addEventListener("click", () => {
            document.querySelector("color-options", "color-picker");
            button.classList.add("selected");
            selectedColor = window.getComputedStyle(button).getPropertyValue("background-color");
        }
        );
    });

    // color picker slider
    colorPicker.addEventListener("change", () => {
        colorPicker.parentElement.style.background = colorPicker.value;
        colorPicker.parentElement.click ();
    });

    // clear canvas button
    clearCanvas.addEventListener("click", () => {
        context.clearRect (0, 0, canvas.width, canvas.height);
        setCanvasBackground();
    });

// EVENT LISTENERS
    // Window
    window.addEventListener("resize", resize);
    //offsets canvas
    window.addEventListener("load", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setCanvasBackground ();
    });

     // Save image link
     saveImg.addEventListener("click", () => {
        const link = document.createElement("a");
        link.download = '${Date.now()}.jpg';
        link.href = canvas.toDataURL();
        link.click();
    });


//  Window refresh save data
    if (isDrawing = true) {
        // store canvas image
        window.onload = function() {
            localStorage.setItem("canvasdrawing", $("drawing"), $("snapshot").value());
        }
        // retrieve canvas image 
        var canvasdrawing = localStorage.getItem("canvasdrawing");
        console.log(canvasdrawing); 
    }

    // Mouse actions
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", drawing);
    canvas.addEventListener("mouseup"), () => isDrawing = false;

   
 



