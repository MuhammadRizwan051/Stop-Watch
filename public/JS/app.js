
// Stop Watch Practise


// If we want to start from sec instead of milisec

// function start() {
//     setInterval(() => {
//         sec++
//         b.innerHTML = sec
//         if(sec >= 5){
//             min++
//             a.innerHTML = min
//             sec = 0
//         }
//     }, 1000);
// }


var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var a = document.getElementById('hour');
var b = document.getElementById('min')
var c = document.getElementById('sec')
var d = document.getElementById('msec')
// var ss = document.getElementsByTagName('span')

var interval;

function start() {
    interval = setInterval(() => {
        // ss.className = 'big'
        msec++
        d.innerHTML = msec
        if (msec >= 100) {
            sec++
            c.innerHTML = sec
            msec = 0
        }
        else if (sec >= 60) {
            min++
            b.innerHTML = min
            sec = 0
        }
        else if (min >= 60) {
            hour++
            a.innerHTML = hour
            min = 0
        }
        document.getElementById('start').disabled = true
    }, 10);
}
function pause() {
    clearInterval(interval)
    document.getElementById('start').disabled = false

}
function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    a.innerHTML = hour
    b.innerHTML = min
    c.innerHTML = sec
    d.innerHTML = msec
    pause()
}

