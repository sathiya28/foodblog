const but =document.querySelector('.btn')
but.addEventListener('mouseover',
function (e){
  console.log("hello");
  but.innerHTML="Order Now !";
  e.preventDefault();

  
});
but.addEventListener('mouseout',
function (e){
  console.log("hello");
  but.innerHTML=`<i class="fa fa-cutlery" ></i>
  Hover over me!`;
  e.preventDefault();

  
});

const sub =document.querySelector('.rowsi')


sub.addEventListener('click',
function (e){
  
  
  alert("Hey ,your requested order will be at your doorstep in a hour !");
  let tday=new Date()
  
  sub.innerHTML=`<h2 style="font-size:20px;text-align:center">Order Placed ....<br>${tday}<h2>`;
  
  
  e.preventDefault();

});

let res=document.querySelector('.open');
let close=document.querySelector('.close');
let x=document.querySelector('.sidebar');
let y=document.querySelector('.style');
res.addEventListener('click',
function(e){
  
  x.style.height="100px";
  y.style.display="block";
  close.style.display="block";
  

  
});
close.addEventListener('click',
function(e){
  
  // x.style.height="10px";
  y.style.display="none";
  close.style.display="none";

  
});
