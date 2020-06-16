const msgEl = document.getElementById('msg');
const randomNum = getRandomNumber();
  function getRandomNumber() {
    return Math.floor(Math.random()*100) + 1;
}
console.log('Number: ', randomNum);
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new window.SpeechRecognition();
recognition.start();
recognition.addEventListener('result', onSpeak);
function onSpeak(e) {
    const msg = e. results[0][0].transcript;
    console.log(msg)
    writeMessage(msg);
}
function writeMessage(msg) {
    msgEl.innerHTML = `<div> You Said: <div>
                        <span class="box"> ${msg} </span>`
}
function checkNumber (msg) {
     const num =+ msg;
     if(Number.isNaN(num)) {
         msgEl.innerHTML +=  '<div>That is not a valid number </div>';
        return;
     }
     if(num > 100 || num < 1) {
         msgEl.innerHTML += '<div> Your number must be between 1-100</div>';
         return;
     }
     if(num === randomNum) {
         document.body.innerHTML = `
         <h2>Congrats! You guessed the Number<br></br>It was ${num} </h2>
         <button class="Play-Again" id="Play-Again"> Play Again </button>`;
     }else if(num < randomNum) {
        msgEl.innerHTML += '<div> Go Lower </div>';
     } else {
         msgEl.innerHTML += '<div> Go Higher </div>';
     }
}
recognition.addEventListener('end', ()=> recognition.start());
document.body.addEventListener();