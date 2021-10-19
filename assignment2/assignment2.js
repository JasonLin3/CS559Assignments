/**
 * Author: Jason Lin
 * Computer Graphics Assignment 2
 * Model of the Solar System
 */

/**
 * Set up the scene, called when window loads
 */
function setup() {
  // retrieves html elements
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  //set speeds that the planets are moving
  var mercurySpeed = 0.025;
  var venusSpeed = 0.018;
  var earthSpeed = 0.01;
  var moonSpeed = 0.05;
  var marsSpeed = 0.0075;
  var UFOSpeed = 0.01;
  var jupiterSpeed = 0.005;
  var saturnSpeed = 0.004;
  var uranusSpeed = 0.003;
  var neptuneSpeed = 0.002;

  // the starting angles - offset so they don't all start in line
  var mercuryAngle = 0;
  var venusAngle = 30;
  var earthAngle = 70;
  var moonAngle = 0;
  var marsAngle = 100;
  var UFOAngle = 0;
  var jupiterAngle = 10;
  var saturnAngle = 80;
  var uranusAngle = 20;
  var neptuneAngle = 15;

  // randomizes star positions for background
  const stars = [];
  for (let i = 0; i < 200; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    stars[i] = [x, y];
  }

  /**
   * Draws all graphic components of the scene
   */
  function draw() {
    canvas.width = canvas.width; // reset canvas
    // update the angle of rotation for each planet
    mercuryAngle = (mercuryAngle - mercurySpeed) % 360;
    venusAngle = (venusAngle - venusSpeed) % 360;
    earthAngle = (earthAngle - earthSpeed) % 360;
    moonAngle = (moonAngle - moonSpeed) % 360;
    marsAngle = (marsAngle - marsSpeed) % 360;
    UFOAngle = (UFOAngle - UFOSpeed) % 360;
    jupiterAngle = (jupiterAngle - jupiterSpeed) % 360;
    saturnAngle = (saturnAngle - saturnSpeed) % 360;
    uranusAngle = (uranusAngle - uranusSpeed) % 360;
    neptuneAngle = (neptuneAngle - neptuneSpeed) % 360;

    /**
     * Draws black background with stars
     */
    function drawBackground() {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      for (let i = 0; i < stars.length; i++) {
        // loops through randomized positions of stars
        context.fillRect(stars[i][0], stars[i][1], 3, 3);
      }
    }

    /**
     * Draws the sun
     */
    function drawSun() {
      context.beginPath();
      context.arc(0, 0, 50, 0, 2 * Math.PI, false);
      context.fillStyle = "yellow";
      context.fill();
      context.lineWidth = 5;
    }

    //Translates, rotates, and draws planets
    function drawMercury() {
      context.save();
      context.rotate(mercuryAngle); // rotates about sun
      context.translate(75, 0); // changes distance from sun
      context.beginPath();
      context.arc(0, 0, 6, 0, 2 * Math.PI, false);
      context.fillStyle = "#747b81";
      context.lineWidth = 5;
      context.fill();
      context.restore();
    }

    function drawVenus() {
      context.save();
      context.rotate(venusAngle); // rotates about sun
      context.translate(100, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 8, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#eed053";
      context.fill();

      context.restore();
    }

    function drawEarth() {
      context.save();
      context.rotate(earthAngle); // rotates about sun
      context.translate(150, 0); // changes distance from sun
      context.beginPath();
      context.arc(0, 0, 13, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "blue";
      context.fill();
      //drawing the details - Green sections
      context.beginPath();
      context.fillStyle = "green";
      context.moveTo(0, -10);
      context.lineTo(-8, -5);
      context.lineTo(-4, 0);
      context.lineTo(0, 0);
      context.lineTo(-2, -10);
      context.moveTo(0, 0);
      context.fill();
      context.beginPath();
      context.lineTo(-3, 5);
      context.lineTo(-7, 10);
      context.lineTo(-4, 9);
      context.lineTo(0, 8);
      context.lineTo(-2, 5);
      context.lineTo(0, 0);
      context.fill();
      context.beginPath();
      context.moveTo(9, 9);
      context.moveTo(7, 0);
      context.moveTo(8, -6);
      context.moveTo(10, 0);
      context.fill();
    }

    function drawMoon() {
      context.save();
      context.rotate(moonAngle); // rotates about Earth
      context.translate(25, 0);
      context.beginPath(); // changes distance from Earth
      context.arc(0, 0, 4, 0, 2 * Math.PI, false); // draws moon
      context.fillStyle = "#F4F6F0";
      context.fill();
      context.restore(); // restores to Earth axis
    }

    function drawISS() {
      context.save();
      context.rotate(moonAngle * 0.5); // rotates about Earth
      context.translate(-25, 0);
      context.beginPath();
      //draw satellite
      context.moveTo(8, 0);
      context.lineTo(8, 6);
      context.lineTo(6, 6);
      context.lineTo(6, 2);
      context.lineTo(2, 2);
      context.lineTo(2, 4);
      context.lineTo(-2, 4);
      context.lineTo(-2, 2);
      context.lineTo(-6, 2);
      context.lineTo(-6, 6);
      context.lineTo(-8, 6);
      context.lineTo(-8, -6);
      context.lineTo(-6, -6);
      context.lineTo(-6, -2);
      context.lineTo(-2, -4);
      context.lineTo(2, -4);
      context.lineTo(2, -2);
      context.lineTo(6, -2);
      context.lineTo(6, -6);
      context.lineTo(8, -6);
      context.closePath();
      context.lineTo;
      context.fillStyle = "grey";
      context.fill();
      context.restore(); // reverts to Earth axis
      context.restore(); // reverts to Sun axis
    }

    function drawMars() {
      context.save();
      context.rotate(marsAngle); // rotates about sun
      context.translate(180, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 15, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#bc2732";
      context.fill();
    }

    function drawUFO() {
      context.save();
      context.rotate(UFOAngle); // rotates about mars
      context.beginPath();
      context.moveTo(0, 18);
      context.lineTo(8, 18);
      context.lineTo(4, 24);
      context.lineTo(-4, 24);
      context.lineTo(-8, 18);
      context.closePath();
      context.fillStyle = "grey";
      context.fill();
      context.beginPath();
      context.arc(0, 24, 1, 0, Math.PI, false);
      context.strokeStyle = "white";
      context.stroke();
      context.restore(); // revert to mars axis
      context.restore(); // revert to sun axis
    }

    function drawJupiter() {
      context.save();
      context.rotate(jupiterAngle); // rotates about sun
      context.translate(240, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 30, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#e36e45";
      context.fill();
      context.restore(); // revert to sun axis
    }

    function drawSaturn() {
      context.save();
      context.rotate(saturnAngle); // rotates about sun
      context.translate(330, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 22, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#fae5bf";
      context.fill();
      context.save(); // creates saturn axis
      context.rotate(saturnAngle * 5); // rotates planet
      context.strokeStyle = "white";
      context.lineWidth = 1;
      // creates the two rings around saturn
      context.moveTo(25, 0);
      context.arc(0, 0, 25, 0, 2 * Math.PI, false);
      context.moveTo(24, 0);
      context.arc(0, 0, 28, 0, 2 * Math.PI, false);
      context.stroke();
      context.beginPath();
      // creates small object on rings to show it spinning/hierarchy
      context.arc(28, 0, 2, 0, 2 * Math.PI, false);
      context.fill();
      context.restore(); // reverts to saturn axis
      context.restore(); // reverts to sun axis
    }

    function drawUranus() {
      context.save();
      context.rotate(uranusAngle); // rotates about sun
      context.translate(350, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 18, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#4FD0E7";
      context.fill();
      context.restore(); // reverts to sun axis
    }

    function drawNeptune() {
      context.save();
      context.rotate(neptuneAngle); // rotates about sun
      context.translate(375, 0); //changes distance from sun
      context.beginPath();
      context.arc(0, 0, 18, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "#4b70dd";
      context.fill();
      context.restore(); // revert to sun axis
    }

    // call drawing functions
    drawBackground();
    context.save();
    context.translate(400, 400); // sets sun to be center of coordinate system
    //draws all planets and other objects
    drawSun();
    drawMercury();
    drawVenus();
    drawEarth();
    drawMoon();
    drawISS();
    drawMars();
    drawUFO();
    drawJupiter();
    drawSaturn();
    drawUranus();
    drawNeptune();
    window.requestAnimationFrame(draw); // calls to redraw page
  }

  // call draw functions
  window.requestAnimationFrame(draw); // draws everything
}
window.onload = setup; // calls setup on window loading
