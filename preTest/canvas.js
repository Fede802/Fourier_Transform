let time2 = 0
let wave2 = []
let path2 = []
let comp = 1
let printtt = true

window.addEventListener('load', ()=>{
    const canvas = document.querySelector("#canvas");
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");
    // while(true)
    setInterval(drawee,170,ctx)
})

let drawee = (ctx) => {
    // console.log("ok")
    // ctx.fillRect(0,0,600,400)
    let x2 = 0;
    let y2 = 0;
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.translate(0,0)
    
    // ctx.moveTo(150,200)
    for(let i = 0; i < comp; i++){
        ctx.beginPath();
        
        let prevx2 = x2;
        let prevy2 = y2;

        let n2 = i * 2 + 1;
        let radius2 = 75 * (4 / (n2 * Math.PI));
        x2 += radius2 * Math.cos(n2 * time2);
        y2 += radius2 * Math.sin(n2 * time2);
        ctx.arc(150+prevx2, 200+prevy2, radius2, 0, 2 * Math.PI);
        ctx.moveTo(150+prevx2,200+prevy2)
        ctx.lineTo(150+x2,200+y2)
        // console.log(i,150+prevx2,200+prevy2)
        // console.log(i,150+prevx2+x2,200+prevy2+y2)
        ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.moveTo(150+x2,200+y2)
    // ctx.lineTo(200+x2,200+y2)
    // ctx.arc(150, 200, radius2, 0, 2 * Math.PI);
    // ctx .stroke();
    // ctx.moveTo(150,200)
    // ctx.lineTo(150+x2,200+y2)
    
    wave2.unshift(y2);
    // ctx.moveTo(350,200)
    for (let i = 0; i < wave2.length; i++) {
        ctx.lineTo(350+i, 200+wave2[i]);
    }
    ctx.stroke();
    if (wave2.length > 250) {
        wave2.pop();
    }
    time2+=2*Math.PI/100
    if(time2 >= 2*Math.PI && printtt){
        printtt = false
        for (let i = 0; i < wave2.length; i++) {
            console.log(wave2[i])
    }
    // printtt = false
    // console.log(time2, wave2)
    
}
}
// draw = true;

// window.addEventListener('load', ()=>{
//     const canvas = document.querySelector("#canvas");
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth; 
//     const ctx = canvas.getContext("2d");

//     let painting = false;

//     function startPosistion(e){
//         painting = true;
//         draw(e);
//     }
//     function endPosistion(){
//         painting = false;
//         ctx.beginPath();
//     }
//     function draw(e){
//         if(!painting) return;
//         ctx.lineWidth = 10;
//         ctx.lineCap = 'round';

//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
//     }

//     canvas.addEventListener('mousedown', startPosistion);
//     canvas.addEventListener('mouseup', endPosistion);
//     canvas.addEventListener('mousemove', draw);
// })

// window.addEventListener('resize', ()=>{
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
// })

// drawcircle = (context)=>{
//         context.beginPath()
//         context.move(300,300)
//         context.drawcircle(0,0,10,10)
//         context.drawcircle(0,0,100,100)
//     while(draw){
//         context.beginPath()
//         context.move(300,300)
//         context.drawcircle(0,0,10,10)
//         context.drawcircle(0,0,100,100)
//     }
// }