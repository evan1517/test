//canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//basic size setting
w=canvas.width;
h=canvas.height



//delta time calculation
let deltaTime = 0;
let lastTimestamp = 0;

//update
function update(timestamp) {
    requestAnimationFrame(update);
    deltaTime = (timestamp - lastTimestamp)/1000;
    lastTimestamp = timestamp;



    //draw
    ctx.clearRect(0, 0, w, h);
    
}

//web load
window.onload = ()=>{
    update(0);
}