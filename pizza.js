function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255);

//   // X labels at the top, starting from 0 by 50
//   textSize(14);
//   textAlign(LEFT, CENTER);
//   text("0", 52, 25);
//   text("50", 102, 25);
//   text("100", 152, 25);
//   text("150", 202, 25);
//   text("200", 252, 25);
//   text("250", 302, 25);
//   text("300", 352, 25);
//   text("350", 402, 25);

//   // Y labels on the left, starting from 0 by 50
//   textAlign(CENTER, TOP);
//   text("0", 25, 52);
//   text("50", 25, 102);
//   text("100", 25, 152);
//   text("150", 25, 202);
//   text("200", 25, 252);
//   text("250", 25, 302);
//   text("300", 25, 352);
//   text("350", 25, 402);

//   // Grid lines
//   stroke(200);
//   for (let i = 0; i <= 8; i++) {
//     line(50, 50 + i * 50, 450, 50 + i * 50);
//     line(50 + i * 50, 50, 50 + i * 50, 450);
//   }

  // --- PIZZA SLICE PIXEL ART ---

  // Row 1 - tip of slice
  fill("yellow");
  rect(200, 50, 50, 50);
  rect(250, 50, 50, 50);

  // Row 2 - cheese widening
  fill("yellow");
  rect(150, 100, 50, 50);
  rect(200, 100, 50, 50);
  rect(250, 100, 50, 50);
  rect(300, 100, 50, 50);

  // Row 3 - cheese and pepperoni
  fill("yellow");
  rect(150, 150, 50, 50);
  rect(250, 150, 50, 50);
  rect(300, 150, 50, 50);
  rect(350, 150, 50, 50);

  fill("red");
  rect(100, 150, 50, 50);
  rect(200, 150, 50, 50);

  // Row 4 - cheese and pepperoni
  fill("yellow");
  rect(100, 200, 50, 50);
  rect(150, 200, 50, 50);
  rect(200, 200, 50, 50);
  rect(300, 200, 50, 50);
  rect(350, 200, 50, 50);

  fill("red");
  rect(250, 200, 50, 50);

  // Row 5 - cheese and pepperoni
  fill("yellow");
  rect(50, 250, 50, 50);
  rect(100, 250, 50, 50);
  rect(200, 250, 50, 50);
  rect(250, 250, 50, 50);
  rect(400, 250, 50, 50);

  fill("red");
  rect(150, 250, 50, 50);
  rect(350, 250, 50, 50);

  fill("green");
  rect(300, 250, 50, 50);

  // Row 6 - cheese bottom
  fill("yellow");
  rect(50, 300, 50, 50);
  rect(100, 300, 50, 50);
  rect(150, 300, 50, 50);
  rect(200, 300, 50, 50);
  rect(250, 300, 50, 50);
  rect(300, 300, 50, 50);
  rect(350, 300, 50, 50);
  rect(400, 300, 50, 50);

  // Row 7 - crust
  fill("orange");
  rect(50, 350, 50, 50);
  rect(100, 350, 50, 50);
  rect(150, 350, 50, 50);
  rect(200, 350, 50, 50);
  rect(250, 350, 50, 50);
  rect(300, 350, 50, 50);
  rect(350, 350, 50, 50);
  rect(400, 350, 50, 50);

  // Row 8 - crust bottom
  fill("sienna");
  rect(50, 400, 50, 50);
  rect(100, 400, 50, 50);
  rect(150, 400, 50, 50);
  rect(200, 400, 50, 50);
  rect(250, 400, 50, 50);
  rect(300, 400, 50, 50);
  rect(350, 400, 50, 50);
  rect(400, 400, 50, 50);
}