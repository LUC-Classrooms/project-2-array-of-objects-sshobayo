/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  for(var i = 0; i < objects.length; i++) {
    objects[i] = new sprites(random(width), random(height));


}

function draw(){
  background(255); //light gray background
  // Make through an array of objects
  for(va)
  objects[i].move(); // move the object
  objects[i].display(); // display the object
}

this.x = tempX; // X position
this.y = tempY; // Y position
this.d = 50; // Diameter
this.speed = random(-1, 1); // Speed

// Define methods
this.move = function() {
  // Move the object
  this.x += this.speed; // Update X position
  // Reverse direction if hitting canvas edges
  if (this.x > width || this.x < 0){
    this.speed = this.speed * -1; // Reverse direction
  }
}

this.display = function(){ 
  // Display the object
  push(); // Save current drawing 
  translate(this.x, this.y); // Move origin to object position
  fill(255, 0, 0); // Set fill color to red
  ellipse(0, 0, this.d, this.d); // Draw a circle
  pop(); // Restore previous drawing
}
}

// Create global variables for test instances of your object
var obj1, obj2;

// Setup function to initialize the canvas and objects
function setup(){
createCanvas(320, 240);
// Create instances of Sprites
obj1 = new Sprites(100, 100);
obj2 = new Sprites(200, 100);
}

// Draw function to animate the objects
function draw(){
background(200); // Clear the background
obj1.move(); // Move object 1
obj1.display(); // Display object 1
obj2.move(); // Move object 2
obj2.display(); // Display object 2

