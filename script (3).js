// ==========================
// INTRO -> LOADING -> MAIN
// ==========================

const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const main = document.getElementById("main");

const btn = document.getElementById("revealBtn");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");

btn.addEventListener("click", () => {

const music = document.getElementById("bgMusic");

music.volume = 1;

music.play()
.then(() => console.log("Audio Started"))
.catch(err => console.log(err));
  
intro.style.display = "none";
loading.style.display = "flex";
  
let load = 0;

const interval = setInterval(() => {

load++;

progress.style.width = load + "%";
percent.innerText = load + "%";

if(load >= 100){

clearInterval(interval);

setTimeout(() => {

loading.style.display = "none";
main.style.display = "flex";


},500);

}

},25);

});


// ==========================
// TYPEWRITER SECRET
// ==========================

function revealSecret(){

const box =
document.getElementById("secretText");

box.innerHTML = "";

const text =
"The Honoured One hehe .";

let i = 0;

const typing = setInterval(()=>{

box.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(typing);

}

},40);

}

// ==========================
// RED FALLING PARTICLES
// ==========================

const particleContainer =
document.getElementById("particles");

function createParticle(){

const p =
document.createElement("div");

const size =
Math.random()*6 + 2;

p.style.position = "absolute";

p.style.width = size + "px";
p.style.height = size + "px";

p.style.borderRadius = "50%";

p.style.left =
Math.random()*window.innerWidth + "px";

p.style.top = "-20px";

p.style.background = "red";

p.style.boxShadow =
"0 0 10px red,0 0 20px red";

particleContainer.appendChild(p);

let pos = -20;

const speed =
Math.random()*3 + 1;

const drift =
(Math.random()-0.5)*2;

const fall = setInterval(()=>{

pos += speed;

p.style.top = pos + "px";

let left =
parseFloat(p.style.left);

left += drift;

p.style.left = left + "px";

if(pos > window.innerHeight){

clearInterval(fall);

p.remove();

}

},16);

}

setInterval(createParticle,120);

// ==========================
// RANDOM GLOW DOTS
// ==========================

function glowDot(){

const dot =
document.createElement("div");

dot.style.position="absolute";

const size =
Math.random()*4+2;

dot.style.width=size+"px";
dot.style.height=size+"px";

dot.style.borderRadius="50%";

dot.style.background="#ff4d4d";

dot.style.boxShadow=
"0 0 15px red";

dot.style.left=
Math.random()*window.innerWidth+"px";

dot.style.top=
Math.random()*window.innerHeight+"px";

dot.style.opacity="0";

particleContainer.appendChild(dot);

let opacity=0;

const fadeIn=setInterval(()=>{

opacity+=0.03;

dot.style.opacity=opacity;

if(opacity>=1){

clearInterval(fadeIn);

setTimeout(()=>{

const fadeOut=setInterval(()=>{

opacity-=0.03;

dot.style.opacity=opacity;

if(opacity<=0){

clearInterval(fadeOut);

dot.remove();

}

},30);

},1000);

}

},30);

}

setInterval(glowDot,400);

// ==========================
// CARD 3D TILT
// ==========================

const card =
document.querySelector(".profile-card");

document.addEventListener("mousemove",(e)=>{

if(!card) return;

const x =
(window.innerWidth/2 - e.pageX)/30;

const y =
(window.innerHeight/2 - e.pageY)/30;

card.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

if(!card) return;

card.style.transform =
"rotateY(0deg) rotateX(0deg)";

});

// ==========================
// RED CURSOR GLOW
// ==========================

const cursor =
document.createElement("div");

cursor.style.width="18px";
cursor.style.height="18px";

cursor.style.borderRadius="50%";

cursor.style.position="fixed";

cursor.style.pointerEvents="none";

cursor.style.background="rgba(255,0,0,.8)";

cursor.style.boxShadow=
"0 0 15px red,0 0 30px red";

cursor.style.zIndex="9999";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left =
e.clientX - 9 + "px";

cursor.style.top =
e.clientY - 9 + "px";

});

// ==========================
// OPTIONAL CONSOLE MESSAGE
// ==========================

console.log(
"%cAGCL PROFILE LOADED",
"color:red;font-size:20px;font-weight:bold;"
);
