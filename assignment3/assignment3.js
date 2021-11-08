/**
 * Author: Jason Lin
 * Computer Graphics Assignment 3
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

    var stack = [mat3.create()]; //Initalize stack with identity on top

    function arcTx(x, y, radius, startAngle, endAngle, counterclockwise) {
      var res = vec2.create();
      vec2.transformMat3(res, [x, y], stack[0]);
      context.arc(
        res[0],
        res[1],
        radius,
        startAngle,
        endAngle,
        counterclockwise
      );
    }

    function lineToTx(x, y) {
      var res = vec2.create();
      vec2.transformMat3(res, [x, y], stack[0]);
      context.lineTo(res[0], res[1]);
    }

    function moveToTx(x, y) {
      var res = vec2.create();
      vec2.transformMat3(res, [x, y], stack[0]);
      context.moveTo(res[0], res[1]);
    }

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

    function drawPlanet(x, y, radius, color) {
      context.beginPath();
      context.fillStyle = color;
      arcTx(x, y, radius, 0, 2 * Math.PI, false);
      context.fill();
      context.closePath();
    }

    function drawEarth() {
      context.beginPath();
      arcTx(0, 0, 13, 0, 2 * Math.PI, false); // draws planet
      context.fillStyle = "blue";
      context.fill();
      //drawing the details - Green sections
      context.beginPath();
      context.fillStyle = "green";
      moveToTx(0, -10);
      lineToTx(-8, -5);
      lineToTx(-4, 0);
      lineToTx(0, 0);
      lineToTx(-2, -10);
      moveToTx(0, 0);
      context.fill();
      context.beginPath();
      lineToTx(-3, 5);
      lineToTx(-7, 10);
      lineToTx(-4, 9);
      lineToTx(0, 8);
      lineToTx(-2, 5);
      lineToTx(0, 0);
      context.fill();
      context.beginPath();
      moveToTx(9, 9);
      lineToTx(7, 0);
      lineToTx(8, -6);
      lineToTx(10, 0);
      context.fill();
    }

    function drawISS() {
      context.beginPath();
      //draw satellite
      moveToTx(8, 0);
      lineToTx(8, 6);
      lineToTx(6, 6);
      lineToTx(6, 2);
      lineToTx(2, 2);
      lineToTx(2, 4);
      lineToTx(-2, 4);
      lineToTx(-2, 2);
      lineToTx(-6, 2);
      lineToTx(-6, 6);
      lineToTx(-8, 6);
      lineToTx(-8, -6);
      lineToTx(-6, -6);
      lineToTx(-6, -2);
      lineToTx(-2, -4);
      lineToTx(2, -4);
      lineToTx(2, -2);
      lineToTx(6, -2);
      lineToTx(6, -6);
      lineToTx(8, -6);
      context.closePath();
      context.fillStyle = "grey";
      context.fill();
    }

    function drawUFO() {
      context.beginPath();
      arcTx(0, 0, 3, 0, 2 * Math.PI, false);
      context.fillStyle = "white";
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx(0, -6);
      lineToTx(8, -6);
      lineToTx(4, 0);
      lineToTx(-4, 0);
      lineToTx(-8, -6);
      context.closePath();
      context.fillStyle = "grey";
      context.fill();
    }

    function drawSaturnRings() {
      context.beginPath();
      context.strokeStyle = "white";
      context.lineWidth = 1;
      // creates the two rings around saturn
      moveToTx(25, 0);
      arcTx(0, 0, 25, 0, 2 * Math.PI, false);
      context.stroke();
      context.closePath();
      context.beginPath();
      moveToTx(28, 0);
      arcTx(0, 0, 28, 0, 2 * Math.PI, false);
      context.stroke();
      context.closePath();
      context.beginPath();
      // creates small object on rings to show it spinning/hierarchy
      arcTx(28, 0, 2, 0, 2 * Math.PI, false);
      context.fill();
      context.closePath();
    }

    // call drawing functions
    drawBackground();
    //draws all planets and other objects
    // Sun
    var Tsun_to_canvas = mat3.create();
    mat3.fromTranslation(Tsun_to_canvas, [400, 400]);
    mat3.multiply(stack[0], stack[0], Tsun_to_canvas);
    drawPlanet(0, 0, 50, "yellow");

    // Mercury
    stack.unshift(mat3.clone(stack[0])); // save
    var Tmercury_to_sun = mat3.create();
    mat3.fromRotation(Tmercury_to_sun, mercuryAngle);
    mat3.translate(Tmercury_to_sun, Tmercury_to_sun, [75, 0]);
    mat3.multiply(stack[0], stack[0], Tmercury_to_sun);
    drawPlanet(0, 0, 6, "#747b81");
    stack.shift(); // resotre

    // Venus
    stack.unshift(mat3.clone(stack[0])); // save
    var Tvenus_to_sun = mat3.create();
    mat3.fromRotation(Tvenus_to_sun, venusAngle);
    mat3.translate(Tvenus_to_sun, Tvenus_to_sun, [100, 0]);
    mat3.multiply(stack[0], stack[0], Tvenus_to_sun);
    drawPlanet(0, 0, 8, "#eed053");
    stack.shift(); // restore

    // Earth
    stack.unshift(mat3.clone(stack[0])); // save
    var Tearth_to_sun = mat3.create();
    mat3.fromRotation(Tearth_to_sun, earthAngle);
    mat3.translate(Tearth_to_sun, Tearth_to_sun, [150, 0]);
    mat3.multiply(stack[0], stack[0], Tearth_to_sun);
    drawEarth();

    // Moon
    stack.unshift(mat3.clone(stack[0])); // save
    var Tmoon_to_earth = mat3.create();
    mat3.fromRotation(Tmoon_to_earth, moonAngle);
    mat3.translate(Tmoon_to_earth, Tmoon_to_earth, [25, 0]);
    mat3.multiply(stack[0], stack[0], Tmoon_to_earth);
    drawPlanet(0, 0, 4, "#F4F6F0");
    stack.shift(); // restore

    // ISS
    stack.unshift(mat3.clone(stack[0]));
    var TISS_to_earth = mat3.create();
    mat3.fromRotation(TISS_to_earth, moonAngle * 0.5);
    mat3.translate(TISS_to_earth, TISS_to_earth, [25, 0]);
    mat3.multiply(stack[0], stack[0], TISS_to_earth);
    drawISS();
    stack.shift();
    stack.shift();

    // Mars
    stack.unshift(mat3.clone(stack[0]));
    var Tmars_to_sun = mat3.create();
    mat3.fromRotation(Tmars_to_sun, marsAngle);
    mat3.translate(Tmars_to_sun, Tmars_to_sun, [180, 0]);
    mat3.multiply(stack[0], stack[0], Tmars_to_sun);
    drawPlanet(0, 0, 15, "#BC2732");

    // UFO
    stack.unshift(mat3.clone(stack[0]));
    var TUFO_to_mars = mat3.create();
    mat3.fromRotation(TUFO_to_mars, UFOAngle);
    mat3.translate(TUFO_to_mars, TUFO_to_mars, [0, 24]);
    mat3.multiply(stack[0], stack[0], TUFO_to_mars);
    drawUFO();
    stack.shift();
    stack.shift();

    // Jupiter
    stack.unshift(mat3.clone(stack[0]));
    var Tjupiter_to_sun = mat3.create();
    mat3.fromRotation(Tjupiter_to_sun, jupiterAngle);
    mat3.translate(Tjupiter_to_sun, Tjupiter_to_sun, [240, 0]);
    mat3.multiply(stack[0], stack[0], Tjupiter_to_sun);
    drawPlanet(0, 0, 30, "#E36E45");
    stack.shift();

    // Saturn
    stack.unshift(mat3.clone(stack[0]));
    var Tsaturn_to_sun = mat3.create();
    mat3.fromRotation(Tsaturn_to_sun, saturnAngle);
    mat3.translate(Tsaturn_to_sun, Tsaturn_to_sun, [330, 0]);
    mat3.multiply(stack[0], stack[0], Tsaturn_to_sun);
    drawPlanet(0, 0, 22, "#fae5bf");

    // Saturn rings
    stack.unshift(mat3.clone(stack[0]));
    var Trings_to_saturn = mat3.create();
    mat3.fromRotation(Trings_to_saturn, saturnAngle * 5);
    mat3.multiply(stack[0], stack[0], Trings_to_saturn);
    drawSaturnRings();
    stack.shift();
    stack.shift();

    // Uranus
    stack.unshift(mat3.clone(stack[0]));
    var Turanus_to_sun = mat3.create();
    mat3.fromRotation(Turanus_to_sun, uranusAngle);
    mat3.translate(Turanus_to_sun, Turanus_to_sun, [350, 0]);
    mat3.multiply(stack[0], stack[0], Turanus_to_sun);
    drawPlanet(0, 0, 18, "#4FD0E7");
    stack.shift();

    // Neptune
    stack.unshift(mat3.clone(stack[0]));
    var Tneptune_to_sun = mat3.create();
    mat3.fromRotation(Tneptune_to_sun, neptuneAngle);
    mat3.translate(Tneptune_to_sun, Tneptune_to_sun, [380, 0]);
    mat3.multiply(stack[0], stack[0], Tneptune_to_sun);
    drawPlanet(0, 0, 18, "#4b70dd");
    stack.shift();

    window.requestAnimationFrame(draw); // calls to redraw page
  }

  // call draw functions
  window.requestAnimationFrame(draw); // draws everything
}
window.onload = setup; // calls setup on window loading
