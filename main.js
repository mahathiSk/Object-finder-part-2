Status ="";
input_text ="";
objects =[];


function setup() {
    canvas= createCanvas(300,290);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 290);
    video.hide();
}

function start() {
    object_detector =ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML ="Status : Object Detecting";
    document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model is Loaded");
    Status =true;
}

function draw() {
    image(video,0,0,300,290)
}

function gotResults(error, result) {
    if(result) {
        console.log(result);
        objects =result;
    }else {
        console.error(error);
    }
}