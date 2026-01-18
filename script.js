const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");

let noClicks = 0;

yesBtn.addEventListener("click", () => {

  const question = document.getElementById("question");
  question.textContent = "I knew you would say yes!! I love you Claireee!!! THANK YOUUU!!! :D";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  noClicks++;

  const scale = 1 + noClicks * 0.2;
  const moveX = noClicks * -15;

  yesBtn.style.transform = `scale(${scale}) translateX(${moveX}px)`;

  if (noClicks === 1) {
    question.textContent = "Are you sure?";
  } else if (noClicks === 2) {
    question.textContent = "Positive?";
  } else if (noClicks === 3) {
    question.textContent = "Are you, POSITIVE.";
  } else if (noClicks === 4){
    question.textContent = "Okay, PLEASE say yes.";
  } else if (noClicks === 5) {
    question.textContent = "Are you 100% sure.";
  } else if (noClicks === 6) {
    question.textContent = "Bromine, I am BEGGING you.";
  } else if (noClicks === 7) {
    question.textContent = "Brotatochip.";
  } else if (noClicks === 8) {
    question.textContent = "SupercalifragilisticexpialiBROcious, PLEASE.";
  } else if (noClicks === 9){
    question.textContent = "DAWG. SAY YES.";
  } else if (noClicks === 10) {
    question.textContent = "PLEASEEE, I NEED THISSSS";
  } else if (noClicks === 11){
    question.textContent = "Please. Just answer yes....";
  } else if (noClicks === 12){
    question.textContent = "Barack BRObama.. PLEASE.";
  } else if (noClicks === 13){
    question.textContent = "I'M SO LONELY.. PLEASE.";
  } else if (noClicks === 14){
    question.textContent = "I genuinely don't like you.";
  } else if (noClicks === 15){
    question.textContent = "Don't even talk to me anymore..";         
  } else if (noClicks === 16){
    question.textContent = "Just answer yes before it gets away...";
  } else {
    question.textContent = "And it's gone. Wow.";
  }
});


const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 50 + "px";
  heart.style.animationDuration = 4 + Math.random() * 10 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);