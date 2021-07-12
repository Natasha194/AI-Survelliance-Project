var capture;
var status = '';
var input = "";

function setup() { 
    canvas = createCanvas(300, 300); 
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();

}

function draw() {  
    push();
    translate(width,0);
    scale(-1, 1);
    image(capture, 0, 0, 320, 300);
    pop();
  }

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
    input = document.getElementById('objectName').value;
}

function modelLoaded() {
    console.log('model loaded');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);

}