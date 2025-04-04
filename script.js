let countdown;
const startBtn=document.querySelector('.start-btn');
const stopBtn=document.querySelector('.stop-btn');
const minutesInput = document.querySelector('.minutes');
const secondsInput=document.querySelector('.seconds');
const timerDisplay = document.querySelector('.timer');
startBtn.addEventListener('click',startCountdown);
stopBtn.addEventListener('click', stopCountdown);
function startCountdown(){
    clearInterval(countdown);
    let min=minutesInput.value ||0;
    let sec=secondsInput.value ||0;
    let totalTime=min*60+parseInt(sec);
    parseInt(sec);
    countdown=setInterval(()=>
    {
        let minutes=Math.floor(totalTime/60);
        let seconds=totalTime%60;
        timerDisplay.textContent=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
        if(totalTime<=0){
            clearInterval(countdown);
            timerDisplay.textContent="Time's up!!";alert("Time's up!");
        }
        totalTime--;
    },1000)
}
function stopCountdown(){
    clearInterval(countdown)
}
