function preload(){

}

function draw() {
    image(video, 0, 0, 300, 300);
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot(){
    random = Math.random(1, 10000)
    save('myimageofaclownface('+random+').png')
}

function modelLoaded(){
    console.log('PoseNet is now awake 😲');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        console.log('Nose X is ' + results[0].pose.nose.x);
        console.log('Nose Y is ' + results[0].pose.nose.y);
    }
}