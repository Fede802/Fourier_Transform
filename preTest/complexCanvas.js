let time2 = 0
let module = []
let phase = []
let waveRe2 = []
let waveIm2 = []
let pathRe2 = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6]
let pathIm2 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
let comp = 3
let isDrawing = false
let canDraw = true

window.addEventListener('load', ()=>{
    const canvas = document.querySelector("#canvas");
    canvas.width = 1000;
    canvas.height = 700;
    const ctx = canvas.getContext("2d");
    // makeCoefficent()
    // setInterval(()=>{
    //     console.log(module, phase)
    // },1000)
    setInterval(drawee,150,ctx)
    function startPosistion(e){
        isDrawing = true;
        canDraw = false;
        time2 = 0
        wave2 = []
        path2 = []
        // clearInterval(intervalID)
        
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        draw(e);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    }
    function endPosistion(){
        isDrawing = false;
        canDraw = true;
        // console.log(path2.length)
        console.log(pathRe2)
        console.log(pathIm2)
        makeCoefficent()
        ctx.beginPath();
        // intervalID = setInterval(drawee,170,ctx)
    }
    function draw(e){
        if(!isDrawing) return;
            // ctx.lineWidth = 10;
            // ctx.lineCap = 'round';
            // clearInterval(intervalID)
            // for (let i = 0; i < path2.length; i++) {
            //     ctx.lineTo(350+i, 200+path2[i]);
            // }
            pathRe2.push(e.clientX-500)
            pathIm2.push(-e.clientY+350)
            // console.log(-e.clientY+200)
            // console.log(path2)
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }
    canvas.addEventListener('mousedown', startPosistion);
    canvas.addEventListener('mouseup', endPosistion);
    canvas.addEventListener('mousemove', draw);
    
})
let drawee = (ctx) => {
    if(canDraw){
    let x2 = 0;
    let y2 = 0;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log("ok")
    for(let i = 0; i < module.length; i++){
        ctx.beginPath();
        
        let prevx2 = x2;
        let prevy2 = y2;

        // let n2 = i * 2 + 1;
        // if(module[i] == 0 ) continue
        let radius2 = module[i]
        // console.log("coeff",coeffR[i],radius2)
        x2 += radius2 * Math.cos(i * time2 + phase[i]);
        y2 += radius2 * Math.sin(i * time2 + phase[i]);
        // x2 += radius2 * Math.cos(2*Math.PI*i/path2.length * time2 + phase[i]);
        // y2 += radius2 * Math.sin(2*Math.PI*i/path2.length * time2 + phase[i]);
        console.log("eh",x2,y2)
        // ctx.arc(150, 200, radius2, 0, 2 * Math.PI);
        // ctx.strokeStyle = "rgb(255,255,20)"
        ctx.arc(500+prevx2, 350+prevy2, radius2, 0, 2 * Math.PI);
        ctx.moveTo(500+prevx2,350+prevy2)
        ctx.lineTo(500+x2,350+y2)
        
        ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.moveTo(500+x2,350+y2)
    ctx.strokeStyle = "rgb(255,80,20)"
    waveRe2.unshift(x2);
    waveIm2.unshift(y2);

    for (let i = 0; i < waveRe2.length; i++) {
        console.log("ok")
        ctx.lineTo(500+waveRe2[i], 350+waveIm2[i]);
        // ctx.lineTo(350+i, 200+path2[path2.length-1-i]);
    }
    ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(150+x2,200+y2)
    
    // ctx.strokeStyle = "rgb(48,15,0)"

    // for (let i = path2.length; i > -1; i--) {
    //     console.log("ok")
    //     ctx.lineTo(350+i, 200+path2[i-1]);
    //     console.log(i)
    // }
    if (waveRe2.length > 1000) {
        waveRe2.pop();
        waveIm2.pop();
    }
    ctx.stroke();
    time2+=Math.PI*2/module.length
}
    
}

function makeCoefficent(){
    // let maxi = 0
    // let maxmod = 0
    const N = pathRe2.length
    for (let k = 0; k < N; k++) {
        let coeffR = 0
        let coeffI = 0
        for (let n = 0; n < N; n++) {
            coeffR += pathRe2[n]*Math.cos(2*Math.PI*(n/N)*k)+pathIm2[n]*Math.sin(2*Math.PI*(n/N)*k)
            coeffI += pathIm2[n]*Math.cos(2*Math.PI*(n/N)*k) - pathRe2[n]*Math.sin(2*Math.PI*(n/N)*k)
            // if(k == 0){
            //     console.log(n, coeffR,pathRe2[n],Math.cos(2*Math.PI*(n/path2.length)*k))
            // }
        }
        coeffR /= N
        coeffI /= N
        console.log("module",k,coeffI,coeffR,phase)
        module[k] = Math.sqrt(Math.pow(coeffR,2)+Math.pow(coeffI,2))
        phase[k] = Math.atan(coeffI/coeffR)  || 0
        
        // if(module[i] > maxmod){
        //     maxmod = module[i]
        //     maxi = i
        // }
    }
    console.log("modulepre",module,phase)
    // for (let i = N; i < 1000; i++) {
    //     module[i] = 0
    //     phase[i] = 0
    // }
    console.log("module",module,phase)
}
// let drawee = (ctx) => {
//     let x2 = 0;
//     let y2 = 0;
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     console.log("ok")
//     for(let i = 0; i < path2.length; i++){
//         ctx.beginPath();
        
//         let prevx2 = x2;
//         let prevy2 = y2;

//         // let n2 = i * 2 + 1;
//         let radius2 = module[i]
//         // console.log("coeff",coeffR[i],radius2)
//         x2 += radius2 * Math.cos(Math.PI * 2 * i * time2 + phase[i]);
//         y2 += radius2 * Math.sin(Math.PI * 2 * i * time2 + phase[i]);
//         console.log(x2,y2)
//         // ctx.arc(150, 200, radius2, 0, 2 * Math.PI);

//         ctx.arc(150+prevx2, 200+prevy2, radius2, 0, 2 * Math.PI);
//         ctx.moveTo(150+prevx2,200+prevy2)
//         ctx.lineTo(150+x2,200+y2)
        
//         ctx.stroke();
//     }
    
//     ctx.beginPath();
//     ctx.moveTo(150+x2,200+y2)
    
//     wave2.unshift(y2);

//     for (let i = 0; i < wave2.length; i++) {
//         ctx.lineTo(350+i, 200+wave2[i]);
//     }
//     ctx.stroke();
//     time2+=2*Math.PI/path2.length
    
// }

// function makeCoefficent(){
//     for (let i = 0; i < path2.length; i++) {
//         path2[i]-=200
//         console.log(path2[i])
//     }
//     for (let i = 0; i < path2.length; i++) {
//         coeffR[i] = 0
//         coeffI[i] = 0
//         for (let j = 0; j < path2.length; j++) {
//             coeffR[i] += 2*path2[i]*Math.cos(2*Math.PI*(i/path2.length)*j)
//             coeffI[i] += 2*path2[i]*Math.sin(2*Math.PI*(i/path2.length)*j)
//         }
//         module[i] = Math.sqrt(coeffR[i]^2+coeffI[i]^2)
//         phase[i] = Math.atan(coeffI[i]/coeffR[i])
//     }
//     console.log("coeffR", module,phase)
// }