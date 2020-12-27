img="";
status="";
objects=[];
function preload ()
{
img=loadImage("download.jpg");
}
function setup()
{
    canvas=createCanvas(650,450);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting objects";    
}

function modelLoaded()
{
console.log("coco-SSD hass loadeddrrr");
status=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error ){
console.log(error);
}
else{
console.log(results);
objects=results;
}



}
function draw()
{
image(img,0,0,650,450);
if(status!="")
{
for(i=0;i<objects.length;i++)
{
document.getElementById("status").innerHTML="status:objectos detecteduo";
stroke("#FF0000");
noFill();
percent=floor(objects[i].confidence* 100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}

}
}












