function setup() {
  createCanvas (800, 600);
}
//section partner: Brian Hudick
function draw() {
  background(100);    // Set background color           https://p5js.org/reference/#/p5/background
  fill(255);          // Set color used to fill shapes  https://p5js.org/reference/#/p5/fill
  noStroke();         // Disable drawing shape outlines https://p5js.org/reference/#/p5/noStroke
  rectMode(CENTER);   // Draw square based on center point  https://p5js.org/reference/#/p5/rectMode
  //rect(mouseX, mouseY, 50, 50);  // Draw square at mouse location  https://p5js.org/reference/#/p5/rect

  for(let i = 0; i < 50; i++){
      for (let j = 0; j < 50; j++){
        var distance = dist(j*40+25, i*40+25, mouseX, mouseY);
        // if (distance < ){
        //   distance = 0;
        // }
        distance = distance/8;
        
        if (distance > 45){
          distance = 45;
        }

        noFill();
        strokeWeight(4);
        stroke(0)
        square(j*40+25, i*40+25, distance);
      }
  }
}
