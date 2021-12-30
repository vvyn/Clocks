function setTime() {
    var currentTime = new Date();

    var currentHr = currentTime.getHours();
    var currentMin = currentTime.getMinutes(); 
    var currentSec = currentTime.getSeconds();
    var usCurrentHr = currentTime.getHours();
    
    if (currentHr < 10) {
        currentHr = "0" + currentHr;
    }
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }
    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }

    document.querySelector(".hr").innerHTML = currentHr;
    document.querySelector(".min").innerHTML = currentMin;
    document.querySelector(".sec").innerHTML = currentSec;



    if (usCurrentHr > 12){
        usCurrentHr -= 12;
    }

    var degHr = (usCurrentHr/12)*360 - 90;
    var degMin = (currentMin/60)*360 - 90;
    var degSec = (currentSec/60)*360 - 90;

    document.querySelector(".hr-tick").style.transform = `rotate(${degHr}deg)`;
    document.querySelector(".min-tick").style.transform = `rotate(${degMin}deg)`;
    document.querySelector(".sec-tick").style.transform = `rotate(${degSec}deg)`;
}

setInterval(setTime, 1000);
