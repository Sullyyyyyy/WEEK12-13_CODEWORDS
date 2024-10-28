let positions = [];
var img;

function preload() {
    img = loadImage("data/athen.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight); // Adjust canvas size as needed
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
      textSize(60); 
  textAlign(CENTER, CENTER); 
  textFont('Courier New');

}
function draw() {
    
  image(img, 0, 0, img.width, img.height);
   var x = constrain(mouseX, 0, img.width - 1);
    var y = constrain(mouseY, 0, img.height - 1);
     var zoom = img.get(x, y, 100, 100);
     image(zoom, mouseX, mouseY, zoom.width*2, zoom.height*2);

  for (let pos of positions) {
    text('Focus is identified as a class position', pos.x, pos.y);
  }
}

function mousePressed() {
  positions.push({ x: mouseX, y: mouseY });

    text("Focus is identified as a class position", width/2, height/2);  
}  
