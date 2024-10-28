let positions = [];
var img;

function preload() {
    img = loadImage("data/rock.png");
}

function setup() {
    createCanvas(1800, 1400);
    textAlign(CENTER, CENTER);
    textSize(60);
    textFont('Courier New');
}

function draw() {
    background(255); // Clear the background
    image(img, 0, 0, width, height); // Draw the image first

    // Draw the text on top of the image
    for (let pos of positions) {
        text('Hello World!', pos.x, pos.y);
    }
}

function mousePressed() {
    positions.push({ x: mouseX, y: mouseY });
}