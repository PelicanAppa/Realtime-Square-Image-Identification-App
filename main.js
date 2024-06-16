function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 150)
    canvas = createCanvas(600, 450);
    canvas.position(1050, 175);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialised!');
}
function draw() {
    background('#fff4cd');
    document.getElementById("square_side").innerHTML = "Width and height of the square is " + difference + " pixels";
    fill('#f90093');
    stroke('#f90093');
    square(noseX, noseY, difference);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('leftWristX = ' + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;