c1=document.getElementById("myCanvas");
ctm=c1.getContext("2d");
color="red";
ctm.beginPath();
ctm.strokeStyle=color;
ctm.lineWidth=2;
ctm.arc(200,200,40,0,2*Math.PI);
ctm.stroke();
c1.addEventListener("mousedown",KeyPress);
function KeyPress(e){
    color=document.getElementById("color").value;
    x=e.clientX-c1.offsetLeft;
    y=e.clientY-c1.offsetTop;
    circle(x,y)
    
}
function circle(x,y){
    ctm.beginPath();
    ctm.strokeStyle=color;
    ctm.lineWidth=2;
    ctm.arc(x,y,40,0,2*Math.PI);
    ctm.stroke()
}
function clearArea(){
   ctm.clearRect(0,0,c1.width,c1.height)
}