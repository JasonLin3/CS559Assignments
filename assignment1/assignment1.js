/**
 * Author: Jason Lin
 * Computer Graphics Assignment 1
 * Underwater scene with crab and shark controlled by sliders
 */

/**
 * Set up the scene, called when window loads
 */
function setup() {
  // retrieves html elements
  var canvas = document.getElementById("myCanvas");
  var slider1 = document.getElementById("slider1");
  var slider2 = document.getElementById("slider2");
  var slider3 = document.getElementById("slider3");
  //default sliders to be on opposite sides
  slider1.value = 0;
  slider2.value = 400;
  slider3.value = 400;

  /**
   * Draws all graphic components of the scene
   */
  function draw() {
    var context = canvas.getContext("2d");
    canvas.width = canvas.width; // reset canvas
    //assign graphics to slider values
    var crabdx = slider1.value;
    var shark1dx = slider2.value;
    var shark2dx = slider3.value;
    //setup line
    context.lineWidth = 1;
    context.strokeStyle = "black";

    /**
     * Draws the background water and sand colors
     */
    function drawBackground() {
      context.fillStyle = "skyblue";
      context.fillRect(0, 0, 800, 720);

      context.fillStyle = "tan";
      context.fillRect(0, 520, 800, 80);
    }

    /**
     * Draws seaweed images on top of the background
     */
    function drawSeaweed() {
      context.strokeStyle = "black";
      context.fillStyle = "green";
      //first seaweed
      context.beginPath();
      context.moveTo(50, 520);
      context.lineTo(25, 490);
      context.lineTo(40, 470);
      context.lineTo(30, 440);
      context.lineTo(40, 420);
      context.lineTo(60, 430);
      context.lineTo(55, 470);
      context.lineTo(60, 480);
      context.closePath();
      context.fill();
      //second seaweed
      context.moveTo(700, 520);
      context.lineTo(720, 500);
      context.lineTo(710, 480);
      context.lineTo(715, 460);
      context.lineTo(700, 430);
      context.lineTo(710, 410);
      context.lineTo(705, 390);
      context.lineTo(710, 370);
      context.lineTo(700, 360);
      context.lineTo(685, 375);
      context.lineTo(690, 395);
      context.lineTo(685, 410);
      context.lineTo(690, 450);
      context.lineTo(685, 470);
      context.closePath();
      context.fill();
    }

    /**
     * Draws a large rock on the scene
     */
    function drawRock() {
      context.fillStyle = "darkgrey";
      context.beginPath();
      context.moveTo(400, 580);
      context.bezierCurveTo(430, 400, 580, 500, 600, 580);
      context.closePath();
      context.fill();
    }

    /**
     * Draws a crab onto the scene
     */
    function drawCrab() {
      context.lineWidth = 1;
      context.fillStyle = "red";
      context.strokeStyle = "red";
      context.beginPath();
      //body
      context.moveTo(110, 540);
      context.bezierCurveTo(60, 535, 70, 498, 110, 500);
      context.moveTo(110, 500);
      context.bezierCurveTo(150, 498, 160, 535, 110, 540);
      //first leg
      context.moveTo(84, 530);
      context.bezierCurveTo(63, 535, 63, 535, 60, 550);
      //second leg
      context.moveTo(80, 520);
      context.bezierCurveTo(60, 525, 60, 525, 60, 535);
      //third leg
      context.moveTo(135, 530);
      context.bezierCurveTo(156, 535, 156, 535, 159, 550);
      //fourth leg
      context.moveTo(139, 520);
      context.bezierCurveTo(160, 525, 160, 525, 159, 535);
      // left arm
      context.moveTo(84, 510);
      context.bezierCurveTo(58, 515, 63, 500, 60, 490);
      context.moveTo(84, 510);
      context.bezierCurveTo(80, 490, 85, 490, 70, 487);
      // right arm
      context.moveTo(140, 510);
      context.bezierCurveTo(162, 515, 167, 500, 164, 490);
      context.moveTo(140, 510);
      context.bezierCurveTo(138, 490, 135, 490, 154, 487);
      // fill the colors
      context.closePath();
      context.fill();

      //eyes
      context.fillStyle = "white";
      context.beginPath();
      context.arc(100, 500, 5, 0, 2 * Math.PI, true);
      context.arc(120, 500, 5, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
      context.fillStyle = "black";
      context.beginPath();
      context.arc(102, 500, 3, 0, 2 * Math.PI, true);
      context.arc(122, 500, 3, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
    }

    /**
     * Draws the shark onto the scene
     */
    function drawShark() {
      context.fillStyle = "grey";
      //body
      context.beginPath();
      context.moveTo(100, 200);
      context.lineTo(150, 180);
      context.lineTo(210, 175);
      context.lineTo(240, 145);
      context.lineTo(260, 175);
      context.lineTo(350, 190);
      context.lineTo(380, 155);
      context.lineTo(380, 230);
      context.lineTo(350, 205);
      context.lineTo(260, 230);
      context.lineTo(220, 230);
      context.lineTo(225, 245);
      context.lineTo(205, 230);
      context.lineTo(140, 220);
      context.lineTo(160, 210);
      context.lineTo(125, 215);
      context.closePath();
      context.fill();
      //eyes
      context.fillStyle = "white";
      context.beginPath();
      context.arc(160, 193, 5, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
      context.fillStyle = "black";
      context.beginPath();
      context.arc(158, 195, 3, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
    }

    // call drawing functions
    drawBackground(); // draws background element
    drawSeaweed(); // draws seaweed
    context.save(); //save this transformation
    context.translate(crabdx, 0); // translate crab based on slider position
    drawCrab(); // draws crab
    context.restore(); //revert to no transformation for the shark element
    context.save();
    context.translate(shark1dx, -100); //translte shark based on slider position
    context.scale(-1, 1); // flip shark(reflect0)
    drawShark(); //draw first shark
    context.restore();
    context.save();
    context.translate(shark2dx, 50); // translate shark based on slider position
    drawShark(); // draw second shark
    context.restore(); // revert to no transformation for rock element

    drawRock(); // draws rock in the foreground, so the crab hides behind it
  }
  //add event listeners for redraw
  slider1.addEventListener("input", draw);
  slider2.addEventListener("input", draw);
  slider3.addEventListener("input", draw);
  draw(); // draws everything
}
window.onload = setup; // calls setup on window loading
