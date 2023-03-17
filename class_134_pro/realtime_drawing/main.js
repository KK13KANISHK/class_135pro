noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(1000, 1000);
    canvas.position(500, 60);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    background('#969A97');
    fill('#F90093');
    stroke("#70093");
    textSize(difference);
    text("KANISHK_THE_GREAT",1 ,500);
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}



function preLoad()
{

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+"rigthWristX = "+rightWristX+"difference = "+difference);
    }
}

