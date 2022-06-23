let hour = document.querySelector("#hr");
let minute = document.querySelector("#mn");
let second = document.querySelector("#sc");

function localTime() {
  let date = new Date();
  let actualHours = date.getHours() * 30;
  let actualMinutes = date.getMinutes() * 6;
  let actualSeconds = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${actualHours + actualMinutes / 12}deg)`;
  minute.style.transform = `rotateZ(${actualMinutes}deg)`;
  second.style.transform = `rotateZ(${actualSeconds}deg)`;
}

function time() {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let actualHours = document.querySelector(".hourInner");
  actualHours.innerHTML = `${hours} :`;
  let actualMinutes = document.querySelector(".minuteInner");
  actualMinutes.innerHTML = `${minutes}`;
  let actualSeconds = document.querySelector(".secondInner");
  actualSeconds.innerHTML = `: ${seconds}`;
}

setInterval(time);
setInterval(localTime);
