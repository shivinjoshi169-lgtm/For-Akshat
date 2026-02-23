const startBtn=document.getElementById("startBtn");
const heartSection=document.getElementById("heartSection");
const typing=document.getElementById("typing");
const petals=document.getElementById("petals");
const openLetter=document.getElementById("openLetter");
const envelopeSection=document.getElementById("envelopeSection");
const music=document.getElementById("bgMusic");

startBtn.onclick=()=>{

document.getElementById("startScreen").style.display="none";
heartSection.classList.remove("hidden");

if(music){
music.volume=0.3;
music.play();
}

createPetals();
typeText();
};

function createPetals(){
for(let i=0;i<35;i++){
let p=document.createElement("div");
p.className="petal";
p.style.left=Math.random()*100+"vw";
p.style.animationDuration=5+Math.random()*5+"s";
petals.appendChild(p);
}
}

const text="❤️ Love You Vanshika ❤️";
let i=0;

function typeText(){
if(i<text.length){
typing.innerHTML+=text.charAt(i);
i++;
setTimeout(typeText,90);
}
}

openLetter.onclick=()=>{
heartSection.classList.add("hidden");
envelopeSection.classList.remove("hidden");
};