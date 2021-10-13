var i = 0;
var txt = 'Official mail: foodblogger@bit.com' ;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function toggleText(){
  document.querySelector(".jiji").style.display='block';
  
}

function toggleText1(){
  document.querySelector(".jiji1").style.display='block';
}

document.querySelector('#hi').addEventListener("mousemove",onClick)
function onClick(e){

  document.querySelector(".hii").innerHTML="Start writing a blog !!";
  document.querySelector(".hii").style.color ="red";
  document.querySelector(".hii").style.fontSize ="25px";
  document.querySelector(".hii").style.fontFamily ="cursive";

    
   }