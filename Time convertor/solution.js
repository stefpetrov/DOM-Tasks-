function attachEventsListeners() {
  let daysInputElement = document.getElementById("days");
  let hoursInputElement = document.getElementById("hours");
  let minutesInputElement = document.getElementById("minutes");
  let secondsInputElement = document.getElementById("seconds");

  let daysButtonElement = document.getElementById("daysBtn");
  let hoursButtonElement = document.getElementById("hoursBtn");
  let minutesButtonElement = document.getElementById("minutesBtn");
  let secondsButtonElement = document.getElementById("secondsBtn");

  secondsButtonElement.addEventListener("click", calc);
  minutesButtonElement.addEventListener("click", calc);
  hoursButtonElement.addEventListener("click", calc);
  daysButtonElement.addEventListener("click", calc)

  function calc(e) {
   if(e.target.id == "daysBtn"){
    hoursInputElement.value = Number(daysInputElement.value) * 24
    minutesInputElement.value = Number(hoursInputElement.value) * 60
    secondsInputElement.value = Number(minutesInputElement.value) * 60

    
   }
   else if(e.target.id == "hoursBtn"){
    daysInputElement.value = Number(hoursInputElement.value) / 24
    minutesInputElement.value = Number(hoursInputElement.value) * 60
    secondsInputElement.value = Number(minutesInputElement.value) * 60

   }

   else if(e.target.id == "minutesBtn"){
    hoursInputElement.value = Number(minutesInputElement.value) / 60
    daysInputElement.value = Number(hoursInputElement.value) / 24
    secondsInputElement.value = Number(minutesInputElement.value) * 60

   }
   else if(e.target.id == "secondsBtn"){
    minutesInputElement.value = Number(secondsInputElement.value) / 60
    hoursInputElement.value = Number(minutesInputElement.value) / 60
    daysInputElement.value = Number(hoursInputElement.value) / 24

   }
   
  }
}
