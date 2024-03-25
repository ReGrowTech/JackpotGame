function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var paras = document.querySelectorAll('p')
var counter = -1;
var startClicked = false
var stopClicked = false

async function onStart() {
    startClicked = true
    if(stopClicked){
        paras.forEach((para)=>{
            para.classList.add('num');
        })
    }
    counter = 1000;
    for (let i = 0; i < counter; i++) {
        var xx = Math.floor(Math.random()*10)
        var yy = Math.floor(Math.random()*10)
        var zz = Math.floor(Math.random()*10)
        document.getElementById("p1").innerText = xx;
        document.getElementById("p2").innerText = yy;
        document.getElementById("p3").innerText = zz;
        await sleep(i * 1);
    }
}

function onStop(){
    if(startClicked){
        startClicked = false
        stopClicked = true
        counter = 0
        paras.forEach((para)=>{
            para.classList.replace('num','num-result');
        })
        var x = Math.floor(Math.random()*10)
        var y = Math.floor(Math.random()*10)
        var z = Math.floor(Math.random()*10)
        document.getElementById("p1").innerText = x;
        document.getElementById("p2").innerText = y;
        document.getElementById("p3").innerText = z;
        
    }

}

const timeElement = document.getElementById("Mytime");
const calEle = document.getElementById("calendar");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function updateTime() {
    const now = new Date();
    const date = now.getDate().toString();
    const mon = months[now.getMonth()];
    const yyyy = now.getFullYear().toString();
    const p = now.getHours().toString().padStart(2, "0");
    const q = now.getMinutes().toString().padStart(2, "0");
    const r = now.getSeconds().toString().padStart(2, "0");
    const s = now.getMilliseconds().toString().padStart(3,"0");
    const timeString = p+" : "+q+" : "+r+" : "+s;
    calEle.innerText = mon+" "+date+", "+yyyy
    timeElement.innerText = timeString;
   }

   setInterval(updateTime, 10);
   updateTime();
