function setup() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var slider1 = document.getElementById("slider1");

  var laps = 0;
  document.getElementById("lap").innerHTML = laps;
  slider1.value = 0;
  var tParam1 = 0;
  var tParam2 = 0.5;

  function draw() {
    canvas.width = canvas.width;
    //tParam1 = (tParam1 + 0.02) % 2;
    if (tParam1 < 1) {
      tParam1 = tParam1 + 0.03;
    } else if (tParam1 < 2) {
      tParam1 = tParam1 + 0.08;
    } else if (tParam1 < 3) {
      tParam1 = tParam1 + 0.08;
    } else if (tParam1 < 4) {
      tParam1 = tParam1 + 0.05;
    } else if (tParam1 < 5) {
      tParam1 = tParam1 + 0.05;
    } else if (tParam1 < 6) {
      tParam1 = tParam1 + 0.08;
    } else if (tParam1 < 7) {
      tParam1 = tParam1 + 0.07;
    } else if (tParam1 < 8) {
      tParam1 = tParam1 + 0.09;
    } else if (tParam1 < 9) {
      tParam1 = tParam1 + 0.03;
    } else if (tParam1 < 10) {
      tParam1 = tParam1 + 0.04;
    } else if (tParam1 < 11) {
      tParam1 = tParam1 + 0.04;
    } else if (tParam1 < 12) {
      tParam1 = tParam1 + 0.04;
    } else if (tParam1 < 13) {
      tParam1 = tParam1 + 0.05;
    } else if (tParam1 < 14) {
      tParam1 = tParam1 + 0.08;
    } else {
      tParam1 = 0;
      laps++;
      document.getElementById("lap").innerHTML = laps;
    }

    if (tParam2 < 1) {
      tParam2 = tParam2 + 0.03;
    } else if (tParam2 < 2) {
      tParam2 = tParam2 + 0.08;
    } else if (tParam2 < 3) {
      tParam2 = tParam2 + 0.08;
    } else if (tParam2 < 4) {
      tParam2 = tParam2 + 0.05;
    } else if (tParam2 < 5) {
      tParam2 = tParam2 + 0.05;
    } else if (tParam2 < 6) {
      tParam2 = tParam2 + 0.08;
    } else if (tParam2 < 7) {
      tParam2 = tParam2 + 0.07;
    } else if (tParam2 < 8) {
      tParam2 = tParam2 + 0.09;
    } else if (tParam2 < 9) {
      tParam2 = tParam2 + 0.03;
    } else if (tParam2 < 10) {
      tParam2 = tParam2 + 0.04;
    } else if (tParam2 < 11) {
      tParam2 = tParam2 + 0.04;
    } else if (tParam2 < 12) {
      tParam2 = tParam2 + 0.04;
    } else if (tParam2 < 13) {
      tParam2 = tParam2 + 0.05;
    } else if (tParam2 < 14) {
      tParam2 = tParam2 + 0.08;
    } else {
      tParam2 = 0;
    }

    function fillRectTx(loc, width, height, Tx) {
      var res = vec2.create();
      vec2.transformMat3(res, loc, Tx);
      context.fillRect(res[0], res[1], width, height);
    }

    function moveToTx(loc, Tx) {
      var res = vec2.create();
      vec2.transformMat3(res, loc, Tx);
      context.moveTo(res[0], res[1]);
    }

    function lineToTx(loc, Tx) {
      var res = vec2.create();
      vec2.transformMat3(res, loc, Tx);
      context.lineTo(res[0], res[1]);
    }

    function drawBackground() {
      context.fillStyle = "green";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "silver";
      // stands
      context.fillRect(350, 20, 200, 5);
      context.fillRect(353, 26, 194, 5);
      context.fillRect(356, 32, 188, 5);
      context.fillRect(359, 38, 182, 5);
      context.fillRect(362, 44, 176, 5);
      context.fillRect(365, 50, 170, 5);
      context.fillRect(368, 56, 164, 5);
      //context.fillStyle = "grey";
      //context.fillRect(330, 270, 160, 40);
      // cars
      var Tcars = mat3.create();
      mat3.fromTranslation(Tcars, [350, 280]);
      mat3.rotate(Tcars, Tcars, Math.PI / 4);
      drawCar(Tcars, "red");
      mat3.translate(Tcars, Tcars, [25, -25]);
      drawCar(Tcars, "red");
      mat3.translate(Tcars, Tcars, [25, -25]);
      drawCar(Tcars, "#0099FF");
      mat3.translate(Tcars, Tcars, [25, -25]);
      drawCar(Tcars, "#0099FF");
      //building
      context.fillStyle = "#525255";
      context.fillRect(150, 250, 100, 50);
      context.strokeStyle = "grey";
      context.beginPath();
      context.rect(155, 255, 90, 40);
      context.stroke();
    }

    function drawTrack() {
      drawOutsideTrack();
      //context.fillStyle = "white";
      //context.fillRect(400, 320, 10, 70);
      drawFinishLine();
    }
    function drawOutsideTrack() {
      var Tcenter_to_canvas = mat3.create();
      mat3.fromTranslation(Tcenter_to_canvas, [375, 240]);
      context.fillStyle = "#777786";

      var p0 = [-250, 150];
      var d0 = [1, 0];
      var p1 = [180, 150];
      var d1 = [100, 0];
      drawThickCurve(p0, d0, p1, d1, 0, 1, 200, Tcenter_to_canvas);
      var p2 = [240, 120];
      var d2 = [40, -100];
      drawThickCurve(p1, d1, p2, d2, 0, 1, 100, Tcenter_to_canvas);
      drawRedStripes(
        [230, 150],
        d1,
        [300, 120],
        d2,
        0,
        1,
        100,
        Tcenter_to_canvas
      );
      var p3 = [290, 90];
      var d3 = [100, 10];
      drawThickCurve(p2, d2, p3, d3, 0, 1, 100, Tcenter_to_canvas);
      var p4 = [350, 0];
      var d4 = [0, -100];
      drawThickCurve(p3, d3, p4, d4, 0, 1, 100, Tcenter_to_canvas);
      var p5 = [350, -80];
      var d5 = [0, -200];
      drawThickCurve(p4, d4, p5, d5, 0, 1, 100, Tcenter_to_canvas);
      var p6 = [280, -160];
      var d6 = [-100, 0];
      drawThickCurve(p5, d5, p6, d6, 0, 1, 200, Tcenter_to_canvas);
      drawRedStripes(p5, d5, p6, d6, 0, 1, 100, Tcenter_to_canvas);
      var p7 = [200, -90];
      var d7 = [-33, 100];
      drawThickCurve(p6, d6, p7, d7, 0, 1, 200, Tcenter_to_canvas);
      drawRedStripes(
        [320, -150],
        d6,
        [260, -90],
        d7,
        0,
        1,
        100,
        Tcenter_to_canvas
      );
      var p8 = [-120, -90];
      var d8 = [-100, -40];
      drawThickCurve(p7, d7, p8, d8, 0, 1, 100, Tcenter_to_canvas);
      var p9 = [-160, -140];
      var d9 = [-40, -60];
      drawThickCurve(p8, d8, p9, d9, 0, 1, 100, Tcenter_to_canvas);
      drawRedStripes(p8, d8, p9, d9, 0, 1, 100, Tcenter_to_canvas);
      var p10 = [-300, -120];
      var d10 = [-50, 200];
      drawThickCurve(p9, d9, p10, d10, 0, 1, 100, Tcenter_to_canvas);
      drawRedStripes(
        p9,
        d9,
        [-250, -100],
        [-50, 200],
        0,
        1,
        100,
        Tcenter_to_canvas
      );
      var p11 = [-360, -20];
      var d11 = [0, 200];
      drawThickCurve(p10, d10, p11, d11, 0, 1, 100, Tcenter_to_canvas);
      var p12 = [-360, 60];
      var d12 = [0, 300];
      drawThickCurve(p11, d11, p12, d12, 0, 1, 100, Tcenter_to_canvas);
      //close loop
      drawThickCurve(p12, d12, p0, d1, 0, 1, 100, Tcenter_to_canvas);

      drawRedStripes(p12, d12, p0, d0, 0, 1, 100, Tcenter_to_canvas);
    }
    function drawFinishLine() {
      context.fillStyle = "white";
      context.fillRect(400, 320, 5, 5);
      context.fillRect(400, 330, 5, 5);
      context.fillRect(400, 340, 5, 5);
      context.fillRect(400, 350, 5, 5);
      context.fillRect(400, 360, 5, 5);
      context.fillRect(400, 370, 5, 5);
      context.fillRect(400, 380, 5, 5);
      context.fillRect(405, 325, 5, 5);
      context.fillRect(405, 335, 5, 5);
      context.fillRect(405, 345, 5, 5);
      context.fillRect(405, 355, 5, 5);
      context.fillRect(405, 365, 5, 5);
      context.fillRect(405, 375, 5, 5);
      context.fillRect(405, 385, 5, 5);
      context.fillStyle = "black";
      context.fillRect(400, 325, 5, 5);
      context.fillRect(400, 335, 5, 5);
      context.fillRect(400, 345, 5, 5);
      context.fillRect(400, 355, 5, 5);
      context.fillRect(400, 365, 5, 5);
      context.fillRect(400, 375, 5, 5);
      context.fillRect(400, 385, 5, 5);
      context.fillRect(405, 320, 5, 5);
      context.fillRect(405, 330, 5, 5);
      context.fillRect(405, 340, 5, 5);
      context.fillRect(405, 350, 5, 5);
      context.fillRect(405, 360, 5, 5);
      context.fillRect(405, 370, 5, 5);
      context.fillRect(405, 380, 5, 5);
    }

    function drawThickCurve(p0, d0, p1, d1, t_begin, t_end, intervals, Tx) {
      var P = [p0, d0, p1, d1];
      var C = function (t_) {
        return Cubic(Hermite, P, t_);
      };

      context.beginPath();
      moveToTx(C(t_begin), Tx);
      for (var i = 1; i <= intervals; i++) {
        var t =
          ((intervals - i) / intervals) * t_begin + (i / intervals) * t_end;
        fillRectTx(C(t), 70, -70, Tx);
      }
      context.stroke();
    }
    function drawRedStripes(p0, d0, p1, d1, t_begin, t_end, intervals, Tx) {
      var alternate = 0;
      var P = [p0, d0, p1, d1];
      var C = function (t_) {
        return Cubic(Hermite, P, t_);
      };

      context.beginPath();
      moveToTx(C(t_begin), Tx);
      for (var i = 1; i <= intervals; i++) {
        if (alternate <= 2) {
          context.fillStyle = "red";
        } else if (alternate <= 4) {
          context.fillStyle = "white";
        } else {
          alternate = 0;
        }
        var t =
          ((intervals - i) / intervals) * t_begin + (i / intervals) * t_end;
        fillRectTx(C(t), 10, -10, Tx);
        alternate++;
      }
      context.stroke();
      context.fillStyle = "#777786";
    }

    function drawCurve(p0, d0, p1, d1, t_begin, t_end, intervals, Tx, color) {
      var P = [p0, d0, p1, d1];
      var C = function (t_) {
        return Cubic(Hermite, P, t_);
      };

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

    function drawCar(Tx, color) {
      //wheels
      context.fillStyle = "black";
      context.beginPath();
      moveToTx([0, -5], Tx);
      lineToTx([0, 0], Tx);
      lineToTx([5, 0], Tx);
      lineToTx([5, -5], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([0, 5], Tx);
      lineToTx([0, 10], Tx);
      lineToTx([5, 10], Tx);
      lineToTx([5, 5], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([20, -5], Tx);
      lineToTx([20, 0], Tx);
      lineToTx([25, 0], Tx);
      lineToTx([25, -5], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([20, 5], Tx);
      lineToTx([20, 10], Tx);
      lineToTx([25, 10], Tx);
      lineToTx([25, 5], Tx);
      context.fill();
      context.closePath();
      //body
      context.fillStyle = color;
      context.beginPath();
      moveToTx([0, -1], Tx);
      lineToTx([0, 6], Tx);
      lineToTx([5, 6], Tx);
      lineToTx([5, -1], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([5, -3], Tx);
      lineToTx([5, 9], Tx);
      lineToTx([17, 9], Tx);
      lineToTx([17, -3], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([17, -2], Tx);
      lineToTx([17, 8], Tx);
      lineToTx([19, 8], Tx);
      lineToTx([19, -2], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([19, -1], Tx);
      lineToTx([19, 5], Tx);
      lineToTx([27, 5], Tx);
      lineToTx([27, -1], Tx);
      context.fill();
      context.closePath();
      context.beginPath();
      moveToTx([27, -3], Tx);
      lineToTx([27, 9], Tx);
      lineToTx([29, 9], Tx);
      lineToTx([29, -3], Tx);
      context.fill();
      context.closePath();
    }

    var p0 = [-100, 180];
    var d0 = [200, 0];
    var p1 = [210, 180];
    var d1 = [100, -20];
    var P0 = [p0, d0, p1, d1];
    var C0 = function (t_) {
      return Cubic(Hermite, P0, t_);
    };
    var p2 = [290, 130];
    var d2 = [40, -20];
    var P1 = [p1, d1, p2, d2];
    var C1 = function (t_) {
      return Cubic(Hermite, P1, t_);
    };
    var p3 = [350, 120];
    var d3 = [30, -10];
    var P2 = [p2, d2, p3, d3];
    var C2 = function (t_) {
      return Cubic(Hermite, P2, t_);
    };
    var p4 = [390, 60];
    var d4 = [0, -100];
    var P3 = [p3, d3, p4, d4];
    var C3 = function (t_) {
      return Cubic(Hermite, P3, t_);
    };
    var p5 = [390, -80];
    var d5 = [-40, -100];
    var P4 = [p4, d4, p5, d5];
    var C4 = function (t_) {
      return Cubic(Hermite, P4, t_);
    };
    var p6 = [340, -120];
    var d6 = [-50, 0];
    var P5 = [p5, d5, p6, d6];
    var C5 = function (t_) {
      return Cubic(Hermite, P5, t_);
    };
    var p7 = [280, -100];
    var d7 = [-50, 50];
    var P6 = [p6, d6, p7, d7];
    var C6 = function (t_) {
      return Cubic(Hermite, P6, t_);
    };
    var p8 = [240, -50];
    var d8 = [-80, 80];
    var P7 = [p7, d7, p8, d8];
    var C7 = function (t_) {
      return Cubic(Hermite, P7, t_);
    };
    var p9 = [-60, -50];
    var d9 = [-200, -40];
    var P8 = [p8, d8, p9, d9];
    var C8 = function (t_) {
      return Cubic(Hermite, P8, t_);
    };
    var p10 = [-180, -120];
    var d10 = [-100, 0];
    var P9 = [p9, d9, p10, d10];
    var C9 = function (t_) {
      return Cubic(Hermite, P9, t_);
    };
    var p11 = [-300, -50];
    var d11 = [-80, 100];
    var P10 = [p10, d10, p11, d11];
    var C10 = function (t_) {
      return Cubic(Hermite, P10, t_);
    };
    var p12 = [-340, 80];
    var d12 = [0, 200];
    var P11 = [p11, d11, p12, d12];
    var C11 = function (t_) {
      return Cubic(Hermite, P11, t_);
    };
    var p13 = [-260, 180];
    var d13 = [200, 0];
    var P12 = [p12, d12, p13, d13];
    var C12 = function (t_) {
      return Cubic(Hermite, P12, t_);
    };
    var P13 = [p13, d13, p0, d0];
    var C13 = function (t_) {
      return Cubic(Hermite, P13, t_);
    };

    function drawPath() {
      var Tcenter_to_canvas = mat3.create();
      mat3.fromTranslation(Tcenter_to_canvas, [375, 180]);
      if (slider1.value == 0) {
        color = "#777786";
      } else {
        color = "white";
      }
      drawCurve(p0, d0, p1, d1, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p1, d1, p2, d2, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p2, d2, p3, d3, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p3, d3, p4, d4, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p4, d4, p5, d5, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p5, d5, p6, d6, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p6, d6, p7, d7, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p7, d7, p8, d8, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p8, d8, p9, d9, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p9, d9, p10, d10, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p10, d10, p11, d11, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p11, d11, p12, d12, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p12, d12, p13, d13, 0, 1, 100, Tcenter_to_canvas, color);
      drawCurve(p13, d13, p0, d0, 0, 1, 100, Tcenter_to_canvas, color);
    }

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
      } else if (t < 14) {
        var u = t - 13.0;
        return C13(u);
      } else {
        return [-100, 180];
      }
    };

    var Ccomp_tangent = function (t) {
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
      var C13prime = function (t_) {
        return Cubic(HermiteDerivative, P13, t_);
      };

      if (t < 1) {
        var u = t;
        return C0prime(u);
      } else if (t < 2) {
        var u = t - 1.0;
        return C1prime(u);
      } else if (t < 3) {
        var u = t - 2;
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
      } else if (t < 14) {
        var u = t - 13.0;
        return C13prime(u);
      } else {
        return [0, 0];
      }
    };

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
      var result = vec2.create();
      vec2.scale(result, P[0], b[0]);
      vec2.scaleAndAdd(result, result, P[1], b[1]);
      vec2.scaleAndAdd(result, result, P[2], b[2]);
      vec2.scaleAndAdd(result, result, P[3], b[3]);
      return result;
    }

    drawBackground();
    drawTrack();
    drawPath();
    var Tcar_to_track = mat3.create();
    mat3.fromTranslation(Tcar_to_track, [375, 180]);
    mat3.translate(Tcar_to_track, Tcar_to_track, Ccomp(tParam1));
    var tangent = Ccomp_tangent(tParam1);
    var angle = Math.atan2(tangent[1], tangent[0]);
    mat3.rotate(Tcar_to_track, Tcar_to_track, angle);
    drawCar(Tcar_to_track, "#0099FF");
    var Tcar_to_track = mat3.create();
    mat3.fromTranslation(Tcar_to_track, [375, 180]);
    mat3.translate(Tcar_to_track, Tcar_to_track, Ccomp(tParam2));
    var tangent = Ccomp_tangent(tParam2);
    var angle = Math.atan2(tangent[1], tangent[0]);
    mat3.rotate(Tcar_to_track, Tcar_to_track, angle);
    drawCar(Tcar_to_track, "red");
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
window.onload = setup;
