
function timeNow(){
    
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute")
    var second = document.querySelector(".second")
    var currentHour = new Date().getHours();
    var currentMinute = new Date().getMinutes();
    var currentSecond = new Date().getSeconds()

    hour.innerHTML = currentHour; 
    minute.innerHTML = currentMinute;
    second.innerHTML = currentSecond;
    if (second.innerHTML.toString().length == 1) {
        second.innerHTML = "0" + second.innerHTML;
    }
    if (minute.innerHTML.toString().length == 1) {
        minute.innerHTML = "0" + minute.innerHTML;
    }
    if (hour.innerHTML.toString().length == 1) {
        hour.innerHTML = "0" + hour.innerHTML;
    }
};
var now = setInterval(timeNow,1000)

