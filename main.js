let currentTime = 1500;
let timer;
let running = false;
const timeDisplay = document.getElementById("time");

function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${min}:${sec}`;
}

function updateTimerDisplay() {
  timeDisplay.textContent = formatTime(currentTime);
}

const updateStatus = (status)=>{
  document.getElementById("status").textContent = status
}

const updatedTime = () => {
  if (currentTime > 0) {
    currentTime--;
    updateTimerDisplay();
  } else {
    clearInterval(timer);
    updateStatus("DONE");
  }
}

function toggleTimer() {
  if (running) {
    clearInterval(timer);
    updateStatus("PAUSE");
  } else {
    timer = setInterval(updatedTime, 1000);
    updateStatus("RUNNING");
  }

  running = !running;
}

document.getElementById("pomodoro").onclick = ()=> {
  currentTime = 1500; 
  updateTimerDisplay()
}
document.getElementById("short-break").onclick = ()=> {
  currentTime = 300; 
  updateTimerDisplay()
}
document.getElementById("long-break").onclick = ()=> {
  currentTime = 900; 
  updateTimerDisplay()
}
