let pokerChips = [];
let numChips = 12;
let chipSize = 80; // Increased chip size
let colors = [];
let bgImage;

function preload() {
    bgImage = loadImage('path/to/your/background/image.jpg'); // Replace with the path to your image
}

function setup() {
    createCanvas(800, 600);
    let angleStep = TWO_PI / numChips;
    let radius = 250; // Adjusted radius for larger chips

    // Generate random colors for each chip
    for (let i = 0; i < numChips; i++) {
        colors.push(color(random(255), random(255), random(255)));
    }

    // Position the chips in a circle
    for (let i = 0; i < numChips; i++) {
        let angle = i * angleStep;
        let x = width / 2 + cos(angle) * radius;
        let y = height / 2 + sin(angle) * radius;
        pokerChips.push(new PokerChip(x, y, chipSize, colors[i], i + 1));
    }
}

function draw() {
    background(bgImage);
    for (let chip of pokerChips) {
        chip.show();
    }
    drawInteractiveText();
}

function drawInteractiveText() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Click Here for Code', width / 2, height / 2);
}

function mousePressed() {
    for (let chip of pokerChips) {
        if (chip.isClicked(mouseX, mouseY)) {
            window.open(`chip${chip.number}.html`, "_blank");
        }
    }
    if (isTextClicked(mouseX, mouseY)) {
        displayCodedFileContent();
    }
}

function isTextClicked(mx, my) {
    let textX = width / 2;
    let textY = height / 2;
    let textWidth = textWidth('Click Here for Code');
    let textHeight = 32; // Approximate height of the text
    return mx > textX - textWidth / 2 && mx < textX + textWidth / 2 && my > textY - textHeight / 2 && my < textY + textHeight / 2;
}

function displayCodedFileContent() {
    let div = createDiv(codedFileContent);
    div.position(10, 10);
    div.style('background-color', 'white');
    div.style('padding', '10px');
    div.style('border', '1px solid black');
}

class PokerChip {
    constructor(x, y, size, color, number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.number = number;
    }

    show() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
        fill(255);
        ellipse(this.x, this.y, this.size * 0.8, this.size * 0.8);
        fill(this.color);
        ellipse(this.x, this.y, this.size * 0.6, this.size * 0.6);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(this.number, this.x, this.y);
    }

    isClicked(mx, my) {
        let d = dist(mx, my, this.x, this.y);
        return d < this.size / 2;
    }
}