function drawTriangle(str) {
    var pr, prv, figure = "";
    for (var i = 0; i < str - 1; i++) {
        pr = str - i;
        prv = i * 2;
        figure += (" ".repeat(pr) + "/" + " ".repeat(prv) + "\\ \n");
    }
    figure += (" ".repeat(str - i) + "/" + "_".repeat(i * 2) + "\\");
    console.log(figure)
}
drawTriangle(3)


function drawRomb(str) {
    var pr, prv, figure = "";
    for (var i = 0; i < str; i++) {
        pr = str - i;
        prv = i * 2;
        figure += (" ".repeat(pr) + "/" + " ".repeat(prv) + "\\ \n");
    }
    for (var i = str - 1; i >= 0; i--) {
        pr = str - i;
        prv = i * 2;
        figure += (" ".repeat(pr) + "\\" + " ".repeat(prv) + "/ \n");
    }
    console.log(figure)
}
drawRomb(3)


function multiply(a, b) {
    var result = 0;
    var bb = Math.abs(b);
    if (a >= 0 && b >= 0) {
        for (i = 0; i < b; i++) {
            result += a;
        }
    } else if (a < 0 && b < 0) {
        for (i = 0; i < bb; i++) {
            result += Math.abs(a);
        }
    } else {
        for (i = 0; i < bb; i++) {
            result += a * (-1);
        }
    }
    console.log(result);
}
multiply(5, 3)