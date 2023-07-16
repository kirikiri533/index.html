
let can = document.getElementById("can");
let con = can.getContext("2d");
let btn = document.getElementById("btn");

let mousex,mousey;
let state = false;
let color = 0;

can.width = window.innerWidth - 2;
can.height = window.innerHeight - 2;

// con.lineWidth = 50;
con.lineCap = 'round';

can.addEventListener('touchstart',touchStart);
can.addEventListener('touchmove',touchMove);
can.addEventListener('touchend',touchEnd);
btn.addEventListener('touchstart',clearBtn);

function clearBtn()
{
    con.clearRect(0,0,can.width,can.height);
}

function touchStart(e){
    mousex = e.clientX;
    mousey = e.clientY;
    state = true;
}

function touchEnd(){
    state = false;
}

function touchMove(e){
    if(!state) return;

    let w = Math.random()* 51;
    con.lineWidth = w;

    color++;
    con.strokeStyle = 'hsl('+color+',100%,50%)';
    con.beginPath();
    con.moveTo(mousex,mousey);
    con.lineTo(e.clientX,e.clientY);
    con.stroke();

    mousex = e.clientX;
    mousey = e.clientY;
}