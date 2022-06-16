function aurora(ctx, x0 = 0,y0 = 0,r0 = 0,color1 = "rgba(255,255,255,0)",color2 = "rgba(255,255,255,0)"){
    //x0,y0,r0 are inner circle, x1, y1, r1 are outer circle
    let x1 = x0, y1 = y0,r1 = 20
    if(x0 > 0 && r0>=0 && r1>=0){
    ctx.beginPath()
    let grd = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
    grd.addColorStop(0, "rgba(120,255,120,1)");
    grd.addColorStop(0.01, color1);
    grd.addColorStop(0.45 , color2);
    grd.addColorStop(0.98, color2);
    grd.addColorStop(0.99, "rgba(6,51,2,.6)");
    // Fill with gradient
    ctx.beginPath();
    ctx.fillStyle = grd; 
    ctx.arc(x0,y0,r1,0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
    }
}


function distance(x1, y1, x2, y2) { //get distance between objects
    let xDistance = x1 - x2;
    let yDistance = y1 - y2;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
} //distance


const color1 = "rgba(6, 51, 2, .79)"
const color2 = "rgba(6, 51, 2, .1)"

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    diff(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    scaled(factor) {
        return new Vector(this.x * factor, this.y * factor);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let position = []; // Pixels
let start = []; // Pixels
let direction = []; // Pixels
let speed = []; // Pixels per second
let step = []; // Pixels

function makeLightBugs (){
    let arr = []
    for (let i=0; i<21;){
        const PropX = ()=>Math.floor(Math.random()*window.innerWidth)
        const PropY = ()=>Math.floor(Math.random()*window.innerHeight)
        let x = PropX(), y = PropY()
        const closeness = arr.every( el => {
            return distance(el.x,el.y,x,y)>40 ? true : false
          })
        if(x > 15 && y > 15 && 
            x < window.innerWidth -15 &&
            y < window.innerHeight -15 &&
            closeness
          ){
            arr = [...arr, 
                { x, y }
            ]
            position[i] = new Vector(x,y)
            start[i] = new Vector(Infinity, Infinity)
            direction[i] = new Vector(0, 0)
            speed[i] = Math.floor( Math.random () * (80 - 13 + 1)) + 13
            step[i] = Math.floor( Math.random () * (80 - 13 + 1)) + 13
            i++
          }
      }
    return arr
  }
const Bugs = makeLightBugs()


let ctx;
let canvas;
let time;


function tick(newTime){
    let delta = (newTime - time) / 1000.0
    time = newTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(let i=0; i<21;i++){
        let distanceToCover = delta * speed[i]
        if (position[i].diff(start[i]).length() + distanceToCover > step[i]) {
            let x = position[i].x
            let y = position[i].y
            let angle = 0
            if(x>canvas.width-20){
                //wanna go left
                angle = Math.PI
            } else if ( x< 20 ){
                //wanna go right
                angle = 0 
            } else if (y > canvas.height-20){
                //wanna go up
                angle = 1.5 * Math.PI
            } else if (y < 70){
                //wanna go down
                angle = .5 * Math.PI
            } else {
                //wanna play
                angle = (Math.random() * Math.PI*2 ) - Math.PI
            }



            direction[i] = new Vector(Math.cos(angle), Math.sin(angle))
            start[i] = position[i]
        }
        position[i] = position[i].add(direction[i].scaled(distanceToCover))
        drawBall(position[i])
    }
    requestAnimationFrame(tick)
}

function setup() {
    canvas = document.getElementById("Canva")
    ctx = canvas.getContext("2d")
    time = performance.now()
    tick(time)
}

function drawBall(position) {
    ctx.save()
    ctx.translate(position.x, position.y)
    aurora(ctx, 20, 20, 1, color1, color2)
    ctx.restore()
}

const anime = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    Bugs.forEach( el=>aurora(ctx, el.x,el.y, 1, color1, color2) )
  }
  window.addEventListener('load',setup)
export default anime