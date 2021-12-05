function setup() {
  var cameraCanvas = document.getElementById("cameraCanvas");
  var cameraContext = cameraCanvas.getContext("2d");
  var slider2 = document.getElementById("slider2");
  slider2.value = 0;

  var context = cameraContext; // default to drawing in the camera window

  var tParam = 0;
  function draw() {
    // clear both canvas instances
    cameraCanvas.width = cameraCanvas.width;

    if (tParam < 1) {
      tParam = tParam + 0.08;
    } else if (tParam < 2) {
      tParam = tParam + 0.1;
    } else if (tParam < 3) {
      tParam = tParam + 0.08;
    } else if (tParam < 4) {
      tParam = tParam + 0.05;
    } else if (tParam < 5) {
      tParam = tParam + 0.09;
    } else if (tParam < 6) {
      tParam = tParam + 0.06;
    } else if (tParam < 7) {
      tParam = tParam + 0.04;
    } else if (tParam < 8) {
      tParam = tParam + 0.02;
    } else if (tParam < 9) {
      tParam = tParam + 0.02;
    } else if (tParam < 10) {
      tParam = tParam + 0.03;
    } else if (tParam < 11) {
      tParam = tParam + 0.03;
    } else if (tParam < 12) {
      tParam = tParam + 0.03;
    } else if (tParam < 12.95) {
      tParam = tParam + 0.08;
    } else {
      tParam = 0;
    }

    var viewAngle = slider2.value * 0.02 * Math.PI;

    function moveToTx(loc, Tx) {
      var res = vec3.create();
      vec3.transformMat4(res, loc, Tx);
      context.moveTo(res[0], res[1]);
    }

    function lineToTx(loc, Tx) {
      var res = vec3.create();
      vec3.transformMat4(res, loc, Tx);
      context.lineTo(res[0], res[1]);
    }

    function drawScene(Tx) {
      var uTx = mat4.clone(Tx);
      mat4.rotateX(uTx, uTx, Math.PI / 2);
      // ground
      context.beginPath();
      context.fillStyle = "green";
      moveToTx([2000, 2000, 0], uTx);
      lineToTx([-2000, 2000, 0], uTx);
      lineToTx([-2000, -2000, 0], uTx);
      lineToTx([2000, -2000, 0], uTx);
      context.closePath();
      context.fill();
      // sky
      context.beginPath();
      context.fillStyle = "#33ADFF";
      moveToTx([4000, 2000, 0], uTx);
      lineToTx([-4000, 2000, 0], uTx);
      lineToTx([-4000, 6000, 0], uTx);
      lineToTx([4000, 6000, 0], uTx);
      context.closePath();
      context.fill();
      context.beginPath();
      moveToTx([-2000, 2000, 0], uTx);
      lineToTx([-2000, -6000, 0], uTx);
      lineToTx([-4000, -6000, 0], uTx);
      lineToTx([-4000, 2000, 0], uTx);
      context.closePath();
      context.fill();
      context.beginPath();
      moveToTx([-4000, -2000, 0], uTx);
      lineToTx([4000, -2000, 0], uTx);
      lineToTx([4000, -6000, 0], uTx);
      lineToTx([-4000, -6000, 0], uTx);
      context.closePath();
      context.fill();
      context.beginPath();
      moveToTx([2000, -6000, 0], uTx);
      lineToTx([4000, -6000, 0], uTx);
      lineToTx([4000, 6000, 0], uTx);
      lineToTx([2000, 6000, 0], uTx);
      context.closePath();
      context.fill();

      /*
      context.beginPath();
      context.fillStyle = "blue";
      moveToTx([2000, 0, 2000], Tx);
      lineToTx([2000, 2000, 2000], Tx);
      lineToTx([-2000, 2000, 2000], Tx);
      lineToTx([-2000, 0, 2000], Tx);
      context.fill();
      moveToTx([2000, 0, -2000], Tx);
      lineToTx([2000, 2000, -2000], Tx);
      lineToTx([-1000, 2000, -2000], Tx);
      lineToTx([-2000, 0, -2000], Tx);
      context.fill();
        */
      // platform
      context.beginPath();
      context.fillStyle = "#644141";
      moveToTx([-200, 0, 30], Tx);
      lineToTx([-100, 0, 30], Tx);
      lineToTx([-100, 10, 30], Tx);
      lineToTx([-200, 10, 30], Tx);
      context.fill();
      lineToTx([-200, 10, -80], Tx);
      lineToTx([-100, 10, -80], Tx);
      lineToTx([-100, 10, 30], Tx);
      context.fill();
      lineToTx([-100, 0, 30], Tx);
      lineToTx([-100, 0, -80], Tx);
      lineToTx([-100, 10, -80], Tx);
      context.fill();
      lineToTx([-100, 0, -80], Tx);
      lineToTx([-200, 0, -80], Tx);
      lineToTx([-200, 10, -80], Tx);
      context.fill();
      lineToTx([-200, 0, 30], Tx);
      lineToTx([-200, 0, -80], Tx);
      lineToTx([-200, 10, -80], Tx);
      context.fill();
    }

    function drawObject(color, TxU, scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx, Tx, [scale, scale, scale]);
      context.beginPath();
      context.fillStyle = "black";
      moveToTx([0.1, -0.02, -0.2], Tx);
      lineToTx([0.1, -0.02, 0], Tx);
      lineToTx([0.1, 0.03, 0], Tx);
      lineToTx([0.1, 0.03, -0.2], Tx);
      context.fill();
      lineToTx([-0.05, 0.03, -0.2], Tx);
      lineToTx([-0.05, 0.03, 0], Tx);
      lineToTx([0.1, 0.03, 0], Tx);
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = color;
      moveToTx([-0.05, -0.02, 0], Tx);
      lineToTx([-0.05, 0.07, 0], Tx);
      lineToTx([0.1, 0.07, 0], Tx);
      lineToTx([0.1, -0.02, 0], Tx);
      context.fill();
      lineToTx([0.1, -0.02, -0.2], Tx);
      lineToTx([-0.05, -0.02, -0.2], Tx);
      lineToTx([-0.05, -0.02, 0], Tx);
      context.fill();
      lineToTx([-0.05, 0.07, 0], Tx);
      lineToTx([-0.05, 0.07, -0.2], Tx);
      lineToTx([-0.05, -0.02, -0.2], Tx);
      context.fill();
      lineToTx([0.1, -0.02, -0.2], Tx);
      lineToTx([0.1, 0.07, -0.2], Tx);
      lineToTx([-0.05, 0.07, -0.2], Tx);
      context.fill();
      context.closePath();
    }

    function drawCamera(color, TxU, scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx, Tx, [scale, scale, scale]);
      context.beginPath();
      context.strokeStyle = color;
      // Twelve edges of a cropped pyramid
      moveToTx([-3, -3, -2], Tx);
      lineToTx([3, -3, -2], Tx);
      lineToTx([3, 3, -2], Tx);
      lineToTx([-3, 3, -2], Tx);
      moveToTx([3, -3, -2], Tx);
      lineToTx([2, -2, 0], Tx);
      lineToTx([2, 2, 0], Tx);
      lineToTx([3, 3, -2], Tx);
      moveToTx([2, -2, 0], Tx);
      lineToTx([-2, -2, 0], Tx);
      lineToTx([-2, 2, 0], Tx);
      lineToTx([2, 2, 0], Tx);
      moveToTx([-2, -2, 0], Tx);
      lineToTx([-3, -3, -2], Tx);
      lineToTx([-3, 3, -2], Tx);
      lineToTx([-2, 2, 0], Tx);
      context.stroke();
    }

    function draw3DAxes(color, TxU, scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx, Tx, [scale, scale, scale]);

      context.strokeStyle = color;
      context.beginPath();
      // Axes
      moveToTx([1.2, 0, 0], Tx);
      lineToTx([0, 0, 0], Tx);
      lineToTx([0, 1.2, 0], Tx);
      moveToTx([0, 0, 0], Tx);
      lineToTx([0, 0, 1.2], Tx);
      // Arrowheads
      moveToTx([1.1, 0.05, 0], Tx);
      lineToTx([1.2, 0, 0], Tx);
      lineToTx([1.1, -0.05, 0], Tx);
      moveToTx([0.05, 1.1, 0], Tx);
      lineToTx([0, 1.2, 0], Tx);
      lineToTx([-0.05, 1.1, 0], Tx);
      moveToTx([0.05, 0, 1.1], Tx);
      lineToTx([0, 0, 1.2], Tx);
      lineToTx([-0.05, 0, 1.1], Tx);
      // X-label
      moveToTx([1.3, -0.05, 0], Tx);
      lineToTx([1.4, 0.05, 0], Tx);
      moveToTx([1.3, 0.05, 0], Tx);
      lineToTx([1.4, -0.05, 0], Tx);
      // Y-label
      moveToTx([-0.05, 1.4, 0], Tx);
      lineToTx([0, 1.35, 0], Tx);
      lineToTx([0.05, 1.4, 0], Tx);
      moveToTx([0, 1.35, 0], Tx);
      lineToTx([0, 1.28, 0], Tx);
      // Z-label
      moveToTx([-0.05, 0, 1.3], Tx);
      lineToTx([0.05, 0, 1.3], Tx);
      lineToTx([-0.05, 0, 1.4], Tx);
      lineToTx([0.05, 0, 1.4], Tx);

      context.stroke();
    }

    function drawUVWAxes(color, TxU, scale) {
      var Tx = mat4.clone(TxU);
      mat4.scale(Tx, Tx, [scale, scale, scale]);

      context.strokeStyle = color;
      context.beginPath();
      // Axes
      moveToTx([1.2, 0, 0], Tx);
      lineToTx([0, 0, 0], Tx);
      lineToTx([0, 1.2, 0], Tx);
      moveToTx([0, 0, 0], Tx);
      lineToTx([0, 0, 1.2], Tx);
      // Arrowheads
      moveToTx([1.1, 0.05, 0], Tx);
      lineToTx([1.2, 0, 0], Tx);
      lineToTx([1.1, -0.05, 0], Tx);
      moveToTx([0.05, 1.1, 0], Tx);
      lineToTx([0, 1.2, 0], Tx);
      lineToTx([-0.05, 1.1, 0], Tx);
      moveToTx([0.05, 0, 1.1], Tx);
      lineToTx([0, 0, 1.2], Tx);
      lineToTx([-0.05, 0, 1.1], Tx);
      // U-label
      moveToTx([1.3, 0.05, 0], Tx);
      lineToTx([1.3, -0.035, 0], Tx);
      lineToTx([1.35, -0.05, 0], Tx);
      lineToTx([1.4, -0.035, 0], Tx);
      lineToTx([1.4, 0.05, 0], Tx);
      // V-label
      moveToTx([-0.05, 1.4, 0], Tx);
      lineToTx([0, 1.3, 0], Tx);
      lineToTx([0.05, 1.4, 0], Tx);
      // W-label
      moveToTx([-0.1, 0, 1.3], Tx);
      lineToTx([-0.05, 0, 1.4], Tx);
      lineToTx([-0, 0, 1.3], Tx);
      lineToTx([0.05, 0, 1.4], Tx);
      lineToTx([0.1, 0, 1.3], Tx);

      context.stroke();
    }

    function draw2DAxes(color, Tx) {
      context.strokeStyle = color;
      context.beginPath();
      // Axes
      moveToTx([120, 0, 0], Tx);
      lineToTx([0, 0, 0], Tx);
      lineToTx([0, 120, 0], Tx);
      // Arrowheads
      moveToTx([110, 5, 0], Tx);
      lineToTx([120, 0, 0], Tx);
      lineToTx([110, -5, 0], Tx);
      moveToTx([5, 110, 0], Tx);
      lineToTx([0, 120, 0], Tx);
      lineToTx([-5, 110, 0], Tx);
      // X-label
      moveToTx([130, 0, 0], Tx);
      lineToTx([140, 10, 0], Tx);
      moveToTx([130, 10, 0], Tx);
      lineToTx([140, 0, 0], Tx);
      // Y-label
      moveToTx([0, 128, 0], Tx);
      lineToTx([5, 133, 0], Tx);
      lineToTx([10, 128, 0], Tx);
      moveToTx([5, 133, 0], Tx);
      lineToTx([5, 140, 0], Tx);
      context.stroke();
    }

    function drawUpVector(color, vecUp, Tx) {
      context.strokeStyle = color;
      context.beginPath();
      // A single line segment in the "up" direction
      moveToTx([0, 0, 0], Tx);
      lineToTx(vecUp, Tx);
      context.stroke();
    }
    var Hermite = function (t) {
      return [
        2 * t * t * t - 3 * t * t + 1,
        t * t * t - 2 * t * t + t,
        -2 * t * t * t + 3 * t * t,
        t * t * t - t * t,
      ];
    };

    var HermiteDerivative = function (t) {
      return [
        6 * t * t - 6 * t,
        3 * t * t - 4 * t + 1,
        -6 * t * t + 6 * t,
        3 * t * t - 2 * t,
      ];
    };

    function Cubic(basis, P, t) {
      var b = basis(t);
      var result = vec3.create();
      vec3.scale(result, P[0], b[0]);
      vec3.scaleAndAdd(result, result, P[1], b[1]);
      vec3.scaleAndAdd(result, result, P[2], b[2]);
      vec3.scaleAndAdd(result, result, P[3], b[3]);
      return result;
    }

    var p0 = [0, 10, 0];
    var d0 = [200, 0, 0];
    var p1 = [100, 100, -30];
    var d1 = [0, 150, -30];
    var p2 = [0, 200, -60];
    var d2 = [-200, 0, -30];
    var p3 = [-100, 100, -90];
    var d3 = [0, -200, -30];
    var p4 = [0, 10, -120];
    var d4 = [100, 0, 0];
    var p5 = [100, 10, -130];
    var d5 = [100, 0, -50];
    var p6 = [200, 10, -230];
    var d6 = [0, 0, -100];
    var p7 = [140, 20, -340];
    var d7 = [-100, 0, -5];
    var p8 = [0, 100, -350];
    var d8 = [-100, 150, 0];
    var p9 = [-100, 300, -350];
    var d9 = [-100, 0, 0];
    var p10 = [-200, 10, -350];
    var d10 = [-200, 0, 0];
    var p11 = [-400, 10, -200];
    var d11 = [0, 0, 300];
    var p12 = [-100, 10, 0];
    var d12 = [100, 0, 0];

    var pp0 = [0, 10, -20];
    var dd0 = [200, 0, 0];
    var pp1 = [100, 100, -50];
    var dd1 = [0, 150, -30];
    var pp2 = [0, 200, -80];
    var dd2 = [-200, 0, -30];
    var pp3 = [-100, 100, -110];
    var dd3 = [0, -200, -30];
    var pp4 = [0, 10, -140];
    var dd4 = [100, 0, 0];
    var pp5 = [100, 10, -150];
    var dd5 = [100, 0, -50];
    var pp6 = [180, 10, -230];
    var dd6 = [0, 2, -100];
    var pp7 = [140, 20, -320];
    var dd7 = [-50, 0, -5];
    var pp8 = [0, 100, -330];
    var dd8 = [-100, 150, 0];
    var pp9 = [-100, 300, -330];
    var dd9 = [-100, 0, 0];
    var pp10 = [-200, 10, -330];
    var dd10 = [-200, 0, 0];
    var pp11 = [-380, 10, -200];
    var dd11 = [0, 0, 300];
    var pp12 = [-100, 10, -20];
    var dd12 = [100, 0, 0];

    var P0 = [p0, d0, p1, d1]; // First two points and tangents
    var P1 = [p1, d1, p2, d2]; // Last two points and tangents
    var P2 = [p2, d2, p3, d3]; // First two points and tangents
    var P3 = [p3, d3, p4, d4]; // Last two points and tangents
    var P4 = [p4, d4, p5, d5]; // Last two points and tangents
    var P5 = [p5, d5, p6, d6]; // Last two points and tangents
    var P6 = [p6, d6, p7, d7]; // Last two points and tangents
    var P7 = [p7, d7, p8, d8]; // Last two points and tangents
    var P8 = [p8, d8, p9, d9]; // Last two points and tangents
    var P9 = [p9, d9, p10, d10]; // Last two points and tangents
    var P10 = [p10, d10, p11, d11]; // Last two points and tangents
    var P11 = [p11, d11, p12, d12]; // Last two points and tangents
    var P12 = [p12, d12, p0, d0]; // Last two points and tangents

    var PP0 = [pp0, dd0, pp1, dd1]; // First two points and tangents
    var PP1 = [pp1, dd1, pp2, dd2]; // Last two points and tangents
    var PP2 = [pp2, dd2, pp3, dd3]; // First two points and tangents
    var PP3 = [pp3, dd3, pp4, dd4]; // Last two points and tangents
    var PP4 = [pp4, dd4, pp5, dd5]; // Last two points and tangents
    var PP5 = [pp5, dd5, pp6, dd6]; // Last two points and tangents
    var PP6 = [pp6, dd6, pp7, dd7]; // Last two points and tangents
    var PP7 = [pp7, dd7, pp8, dd8]; // Last two points and tangents
    var PP8 = [pp8, dd8, pp9, dd9]; // Last two points and tangents
    var PP9 = [pp9, dd9, pp10, dd10]; // Last two points and tangents
    var PP10 = [pp10, dd10, pp11, dd11]; // Last two points and tangents
    var PP11 = [pp11, dd11, pp12, dd12]; // Last two points and tangents
    var PP12 = [pp12, dd12, pp0, dd0]; // Last two points and tangents

    var C0 = function (t_) {
      return Cubic(Hermite, P0, t_);
    };
    var C1 = function (t_) {
      return Cubic(Hermite, P1, t_);
    };
    var C2 = function (t_) {
      return Cubic(Hermite, P2, t_);
    };
    var C3 = function (t_) {
      return Cubic(Hermite, P3, t_);
    };
    var C4 = function (t_) {
      return Cubic(Hermite, P4, t_);
    };
    var C5 = function (t_) {
      return Cubic(Hermite, P5, t_);
    };
    var C6 = function (t_) {
      return Cubic(Hermite, P6, t_);
    };
    var C7 = function (t_) {
      return Cubic(Hermite, P7, t_);
    };
    var C8 = function (t_) {
      return Cubic(Hermite, P8, t_);
    };
    var C9 = function (t_) {
      return Cubic(Hermite, P9, t_);
    };
    var C10 = function (t_) {
      return Cubic(Hermite, P10, t_);
    };
    var C11 = function (t_) {
      return Cubic(Hermite, P11, t_);
    };
    var C12 = function (t_) {
      return Cubic(Hermite, P12, t_);
    };

    var CC0 = function (t_) {
      return Cubic(Hermite, PP0, t_);
    };
    var CC1 = function (t_) {
      return Cubic(Hermite, PP1, t_);
    };
    var CC2 = function (t_) {
      return Cubic(Hermite, PP2, t_);
    };
    var CC3 = function (t_) {
      return Cubic(Hermite, PP3, t_);
    };
    var CC4 = function (t_) {
      return Cubic(Hermite, PP4, t_);
    };
    var CC5 = function (t_) {
      return Cubic(Hermite, PP5, t_);
    };
    var CC6 = function (t_) {
      return Cubic(Hermite, PP6, t_);
    };
    var CC7 = function (t_) {
      return Cubic(Hermite, PP7, t_);
    };
    var CC8 = function (t_) {
      return Cubic(Hermite, PP8, t_);
    };
    var CC9 = function (t_) {
      return Cubic(Hermite, PP9, t_);
    };
    var CC10 = function (t_) {
      return Cubic(Hermite, PP10, t_);
    };
    var CC11 = function (t_) {
      return Cubic(Hermite, PP11, t_);
    };
    var CC12 = function (t_) {
      return Cubic(Hermite, PP12, t_);
    };

    var C0prime = function (t_) {
      return Cubic(HermiteDerivative, P0, t_);
    };
    var C1prime = function (t_) {
      return Cubic(HermiteDerivative, P1, t_);
    };
    var C2prime = function (t_) {
      return Cubic(HermiteDerivative, P2, t_);
    };
    var C3prime = function (t_) {
      return Cubic(HermiteDerivative, P3, t_);
    };
    var C4prime = function (t_) {
      return Cubic(HermiteDerivative, P4, t_);
    };
    var C5prime = function (t_) {
      return Cubic(HermiteDerivative, P5, t_);
    };
    var C6prime = function (t_) {
      return Cubic(HermiteDerivative, P6, t_);
    };
    var C7prime = function (t_) {
      return Cubic(HermiteDerivative, P7, t_);
    };
    var C8prime = function (t_) {
      return Cubic(HermiteDerivative, P8, t_);
    };
    var C9prime = function (t_) {
      return Cubic(HermiteDerivative, P9, t_);
    };
    var C10prime = function (t_) {
      return Cubic(HermiteDerivative, P10, t_);
    };
    var C11prime = function (t_) {
      return Cubic(HermiteDerivative, P11, t_);
    };
    var C12prime = function (t_) {
      return Cubic(HermiteDerivative, P12, t_);
    };

    var Ccomp = function (t) {
      if (t < 1) {
        var u = t;
        return C0(u);
      } else if (t < 2) {
        var u = t - 1.0;
        return C1(u);
      } else if (t < 3) {
        var u = t - 2.0;
        return C2(u);
      } else if (t < 4) {
        var u = t - 3.0;
        return C3(u);
      } else if (t < 5) {
        var u = t - 4.0;
        return C4(u);
      } else if (t < 6) {
        var u = t - 5.0;
        return C5(u);
      } else if (t < 7) {
        var u = t - 6.0;
        return C6(u);
      } else if (t < 8) {
        var u = t - 7.0;
        return C7(u);
      } else if (t < 9) {
        var u = t - 8.0;
        return C8(u);
      } else if (t < 10) {
        var u = t - 9.0;
        return C9(u);
      } else if (t < 11) {
        var u = t - 10.0;
        return C10(u);
      } else if (t < 12) {
        var u = t - 11.0;
        return C11(u);
      } else if (t < 13) {
        var u = t - 12.0;
        return C12(u);
      }
    };

    var Ccomp_tangent = function (t) {
      if (t < 1) {
        var u = t;
        return C0prime(u);
      } else if (t < 2) {
        var u = t - 1.0;
        return C1prime(u);
      } else if (t < 3) {
        var u = t - 2.0;
        return C2prime(u);
      } else if (t < 4) {
        var u = t - 3.0;
        return C3prime(u);
      } else if (t < 5) {
        var u = t - 4.0;
        return C4prime(u);
      } else if (t < 6) {
        var u = t - 5.0;
        return C5prime(u);
      } else if (t < 7) {
        var u = t - 6.0;
        return C6prime(u);
      } else if (t < 8) {
        var u = t - 7.0;
        return C7prime(u);
      } else if (t < 9) {
        var u = t - 8.0;
        return C8prime(u);
      } else if (t < 10) {
        var u = t - 9.0;
        return C9prime(u);
      } else if (t < 11) {
        var u = t - 10.0;
        return C10prime(u);
      } else if (t < 12) {
        var u = t - 11.0;
        return C11prime(u);
      } else if (t < 13) {
        var u = t - 12.0;
        return C12prime(u);
      }
    };

    var CameraCurve = function (angle) {
      var distance = 600.0;
      var eye = vec3.create();
      eye[0] = distance * Math.sin(viewAngle + 0.5);
      eye[1] = 125;
      eye[2] = distance * Math.cos(viewAngle + 0.5);
      return [eye[0], eye[1], eye[2]];
    };

    function drawTrajectory(t_begin, t_end, intervals, C, Tx, color) {
      context.strokeStyle = color;
      context.beginPath();
      moveToTx(C(t_begin), Tx);
      for (var i = 1; i <= intervals; i++) {
        var t =
          ((intervals - i) / intervals) * t_begin + (i / intervals) * t_end;
        lineToTx(C(t), Tx);
      }
      context.stroke();
    }

    // create two lookAt transforms; one for the camera
    // and one for the "external observer"

    // Create Camera (lookAt) transform
    var eyeCamera = CameraCurve(viewAngle);
    var targetCamera = vec3.fromValues(0, 50, -50); // Aim at the origin of the world coords
    var upCamera = vec3.fromValues(0, 100, 0); // Y-axis of world coords to be vertical
    var TlookAtCamera = mat4.create();
    mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);

    // Create Camera (lookAt) transform
    var eyeObserver = vec3.fromValues(500, 300, 500);
    var targetObserver = vec3.fromValues(0, 50, 0); // Observer still looks at origin
    var upObserver = vec3.fromValues(0, 1, 0); // Y-axis of world coords to be vertical
    var TlookAtObserver = mat4.create();
    mat4.lookAt(TlookAtObserver, eyeObserver, targetObserver, upObserver);

    // Create ViewPort transform (assumed the same for both canvas instances)
    var Tviewport = mat4.create();
    mat4.fromTranslation(Tviewport, [400, 300, 0]); // Move the center of the
    // "lookAt" transform (where
    // the camera points) to the
    // canvas coordinates (200,300)
    mat4.scale(Tviewport, Tviewport, [100, -100, 1]); // Flip the Y-axis,
    // scale everything by 100x
    // make sure you understand these

    context = cameraContext;

    // Create Camera projection transform
    // (orthographic for now)
    var TprojectionCamera = mat4.create();
    mat4.ortho(TprojectionCamera, -100, 100, -100, 100, -1, 1);
    //mat4.perspective(TprojectionCamera, Math.PI / 4, 1, -1, 1); // Use for perspective teaser!

    // Create transform t_VP_PROJ_CAM that incorporates
    // Viewport, projection and camera transforms
    var tVP_PROJ_VIEW_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Camera, Tviewport, TprojectionCamera);
    mat4.multiply(tVP_PROJ_VIEW_Camera, tVP_PROJ_VIEW_Camera, TlookAtCamera);

    // Create model(ing) transform
    // (from moving object to world)
    var Tmodel = mat4.create();
    mat4.fromTranslation(Tmodel, Ccomp(tParam));
    var tangent = Ccomp_tangent(tParam);
    var angle = Math.atan2(tangent[1], tangent[0]);
    mat4.rotateZ(Tmodel, Tmodel, angle);
    if (tParam > 5) {
      var vAngle = Math.atan2(tangent[2], tangent[0]);
      mat4.rotateY(Tmodel, Tmodel, vAngle);
    }

    // Create transform t_VP_PROJ_VIEW_MOD that incorporates
    // Viewport, projection, camera, and modeling transform
    var tVP_PROJ_VIEW_MOD_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD_Camera, tVP_PROJ_VIEW_Camera, Tmodel);

    // Draw the following in the Camera window
    context = cameraContext;
    //draw2DAxes("black", mat4.create());
    //draw3DAxes("grey", tVP_PROJ_VIEW_Camera, 100.0);
    // drawUpVector("orange",upCamera,tVP_PROJ_VIEW_Camera,1.0);
    drawScene(tVP_PROJ_VIEW_Camera);
    drawTrajectory(0.0, 1.0, 100, C0, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C1, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C2, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C3, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C4, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C5, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C6, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C7, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C8, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C9, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C10, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C11, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, C12, tVP_PROJ_VIEW_Camera, "black");

    drawTrajectory(0.0, 1.0, 100, CC0, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC1, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC2, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC3, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC4, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC5, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC6, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC7, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC8, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC9, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC10, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC11, tVP_PROJ_VIEW_Camera, "black");
    drawTrajectory(0.0, 1.0, 100, CC12, tVP_PROJ_VIEW_Camera, "black");

    //draw3DAxes("green", tVP_PROJ_VIEW_MOD_Camera, 100.0); // Uncomment to see "model" coords
    drawObject("red", tVP_PROJ_VIEW_MOD_Camera, 100.0);

    window.requestAnimationFrame(draw);
  }

  //slider1.addEventListener("input", draw);
  //slider2.addEventListener("input", draw);
  //draw();
  window.requestAnimationFrame(draw);
}
window.onload = setup;
