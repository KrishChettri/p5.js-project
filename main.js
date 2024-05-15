function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
        canvas.position(110,250);
        video = createCapture(VIDEO);
        video.hide();

}

function draw(){
    image(video, 0, 0, 640, 480);

    circle(50, 425, 60);
    ellipse(50, 50, 80, 50,50);
    rect(550, 20, 55, 55);
}

function take_snapshot(){
    save('child_name.png')
}