var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");


drawMap();


function drawMap() { //绘制棋盘
    var start = 60;
    ctx.beginPath();
    var cell = 40;
    var max = cell * 12 + start;

    ctx.moveTo(start, start);
    for (var i = 0; i <= 12; i++) { //画九条竖线
        var p = i * cell + start + 1;
        ctx.lineTo(p, max); //lineTo方法在moveTo方法中指定的直线起点与参数中指定的直线终点之间绘制一条直线。
        ctx.moveTo(p + cell, start); //moveTo方法的作用是讲光标移动指定的坐标点，绘制直线的时候以这个坐标点为起点。
    }

    for (var i = 0; i <= 12; i++) { //画横线
        var p = i * cell + start + 1;
        ctx.moveTo(start, p);
        ctx.lineTo(max, p);

    }

    ctx.strokeStyle = "#A9A9A9";
    ctx.stroke();
}
