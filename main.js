var capture;
var status = '';
var input = "";
objects = [];

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


    if(status != "") {
        objectDetector.detect(capture, gotResults);

                for(i=0; i < objects.length; i++) {

                    if (objects[i].label == input) {

                    document.getElementById("status").innerHTML = 'Status: Object Detected';
                    document.getElementById('ObjectNo').innerHTML = "No. of Objects: " + objects.length
        
                    fill("#FFFFFF");
                    percent = floor(objects[i].confidence * 100);
                    text(objects[i].label + " " + percent +"%", objects[i].x + 15, objects[i].y + 15);
                    noFill();
                    stroke("#FFFFFF");
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].width);

                }
            
            }
            
        
    }

    
  }

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
    input = document.getElementById('objectName').value;
}

function modelLoaded() {
    console.log('model loaded');
    status = true;

}

function gotResults(error, results) {

    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }

}