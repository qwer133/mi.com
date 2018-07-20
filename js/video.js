window.onload=function(){
var video=document.querySelector("video");
var dbr=document.querySelector(".db .dbr");
var playBtn=document.querySelector(".switch");
var currProgress=document.querySelector(".curr-progress");
var progress=document.querySelector(".progress");
var totalTime=document.querySelector(".total-time");
var currTime=document.querySelector(".curr-time");
var exTend=document.querySelector(".extend");
var qiu=document.querySelector(".progress .qiu");
var guaas=document.querySelector(".guaas");
var plays=document.querySelector(".plays");
var playsimg=document.querySelector(".plays img");
var pro=document.querySelector(".pro");
var body1=document.querySelector(".body1");
dbr.onclick=function(){
   plays.style.display="none";
   body1.style.display="none";
   video.pause();
}
playsimg.onclick=function(){
    this.style.display="none";
    video.play();
    playBtn.classList.remove("icon-play");
    playBtn.classList.add("icon-pause");
}
video.volume=0.5;
guaas.onmousedown=function(event){
    var juli=(document.body.offsetWidth/2)-(plays.offsetWidth/2)+(plays.offsetWidth-160);
    console.log(juli,document.body.offsetWidth,plays.offsetWidth/2);
    console.log(event.clientX);
    var x=(event.clientX)-juli;
    var yl=x/10;
    yl1=(Math.floor(yl))/10;
    console.log(yl1);
    pro.style.width=yl1*100+"%";
    video.volume=yl1;
}
var tTime=0;
playBtn.onclick=function(){
   if(video.paused){
       video.play();
       this.classList.remove("icon-play");
       this.classList.add("icon-pause");
   }
   else{
       video.pause();
        this.classList.add("icon-play");
       this.classList.remove("icon-pause");
   }
}

video.oncanplay=function(){
 tTime=video.duration;
    var h=Math.floor(tTime/3600);  
    var m=Math.floor(tTime%3600/60); 
    var s=Math.floor(tTime%60); 
    h=h>=10?h:"0"+h;
    m=m>=10?m:"0"+m;
    s=s>=10?s:"0"+s;
    totalTime.innerHTML=h+":"+m+":"+s;
}
video.ontimeupdate=function(){
 var cTime=video.currentTime;
 var h=Math.floor(cTime/3600); 
 var m=Math.floor(cTime%3600/60); 
 var s=Math.floor(cTime%60); 
 h=h>=10?h:"0"+h;
 m=m>=10?m:"0"+m;
 s=s>=10?s:"0"+s;
 currTime.innerHTML=h+":"+m+":"+s;
 var value=cTime/tTime;
 currProgress.style.width=value*100+"%";
 var width=progress.offsetWidth;
 var changdu=value*width;
 changdu=Math.floor(changdu)-5;
 if(changdu>946){
 changdu=946;
}
qiu.style.left=changdu+"px";
}
exTend.onclick=function(){
 video.webkitRequestFullscreen();
}
}
