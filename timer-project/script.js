

const timeLeft=document.querySelector('.time-left');
const timerButtons = document.querySelectorAll('[data-time]');
const comebackTime = document.querySelector('end-time');
let timerInterval;
function timer(seconds) {

    
  const now = Date.now();

  const then = now + seconds * 1000;

  
  displayTime(seconds);
  
  timerInterval= setInterval(function () {
    const secondsLeft =Math.round((then - (Date.now())) / 1000);
   if(secondsLeft==0) {
    clearInterval(timer);
   
   }

   
    displayTime(secondsLeft);
    displayComebackTime(then);
    
    

    
   },1000);
} 

timer(70);
   function displayTime(secondsLeft) 
    {
        let minutes= Math.floor(secondsLeft/60);
        let seconds= Math.floor(secondsLeft%60);
        
      
        if(minutes<10) {
            minutes="0"+minutes;
    }
      if(seconds<10) {
        seconds="0"+seconds;
    }


  


  timeLeft.textContent=`${minutes}:${seconds}`;


}

timerButtons.forEach(function(button) 
{
     button.addEventListener('click',function(event) {

        clearInterval(timerInterval);
  const minutes= event.target.getAttribute('data-time');

    const seconds = minutes * 60;
    console.log(seconds);
      timer(seconds);

     })
     

    
    });

    function displayComebackTime(seconds){
        

    }







