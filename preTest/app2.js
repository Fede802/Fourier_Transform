// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time4 = 0//-Math.PI/2;
let wave4 = [];
let y4 = []
let fourierY4


function setup() {
    createCanvas(600, 400);
    fourierY4 = dft4(y4)
}

function draw() {
    background(0);
    translate(150, 200);

    let x3 = 0;
    let y3 = 0;

    for (let i = 0; i < slider3.value(); i++) {
        let prevx3 = x3;
        let prevy3 = y3;

        let n3 = i * 2 + 1;
        let radius3 = 75 * (4 / (n3 * PI));
        x3 += radius3 * cos(n3 * time3);
        y3 += radius3 * sin(n3 * time3);

        stroke(255, 100);
        noFill();
        ellipse(prevx3, prevy3, radius3 * 2);

        //fill(255);
        stroke(255);
        line(prevx3, prevy3, x3, y3);
        //ellipse(x, y, 8);
    }
    // console.log('y = ',y)
    // console.log('w = ',wave)
    wave3.unshift(y3);
    // console.log('y2 = ',y)
    // console.log('w2 = ',wave)


    translate(200, 0);
    line(x3 - 200, y3, 0, wave3[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave3.length; i++) {
        vertex(i, wave3[i]);
    }
    endShape();

    time3 += 0.1;


    if (wave3.length > 250) {
        wave3.pop();
    }
}
