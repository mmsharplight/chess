var player;
user_one = new Object();
user_one.name = "tuzi";
user_one.player = true;

user_two = new Object();
user_two.name = "xiaotuzi";
user_two.player = false;


var chess = new Array(); //棋盘的行数
// console.log(chess);
chess.length = 12;
// console.log(chess);
for (var i = 0; i < chess.length; i++)
    chess[i] = new Array(); //棋盘的列数

//初始化数组
for (var row = 0; row < 11; row++) { //row=(left-90)/40  行
    for (var col = 0; col < 11; col++) { //col=(top-90)/40  列
        chess[row][col] = 0;
    };
};

$(".textform").change(function() { //总的棋子数变化时触发事件
    setTimeout(function() {
        judgeSum();
    }, 10);
});

addText(); //得到棋子的总数

// $("#text1").change(function() {
//     drawChess();
//     console.log(2);
// });
// // $("#text1").change(function(){
// //     setTimeout(function(){
// //         drawChess();
// //     },10);
// // });

// $("#text2").change(function() {
//     drawChess();
//     console.log(3);
// });
// $("#text3").change(function() {
//     drawChess();
// });
// $("#text4").change(function() {
//     drawChess();
// });
// $("#text5").change(function() {
//     drawChess();
// });
// $("#text6").change(function() {
//     drawChess();
// });
// $("#text7").change(function() {
//     drawChess();
// });
// $("#text8").change(function() {
//     drawChess();
// });

$(".user_submit").click(function() { //切换用户button的点击事件

    if (user_one.player) {
        user_one.player = false;
        console.log(11);
    } else {
        user_two.player = false;
        console.log(22);
        user_one.player = true;
        console.log(33);
    }


});

$(".form_submit").click(function() {
    drawChess();
})


function judgeWin() { //判断输赢
    var a = false;
    var colcul = 0;
    var winner_name;
    for (var row = 0; row < 11; row++) {
        for (var col = 0; col < 11; col++) {
            if (chess[row][col] == 0) {
                colcul++;
                // console.log(colcul);
            }
        }
    }
    if (colcul == 121) {
        if (user_one.player) {
            winner_name = user_two.name;
            alert("恭喜" + winner_name + ",你成为这场战役的最终赢家！！！");
        } else {
            winner_name = user_one.name;
            alert("恭喜" + winner_name + ",你成为这场战役的最终赢家！！！");
        }
    }
}

function addText() { //计算棋子的总数
    var texts = document.getElementsByName("textform");
    for (i = 0; i < texts.length; i++) {
        texts[i].onblur = function() {
            var text1 = document.getElementById("text1").value;
            var text2 = document.getElementById("text2").value;
            var text3 = document.getElementById("text3").value;
            var text4 = document.getElementById("text4").value;
            var text5 = document.getElementById("text5").value;
            var text6 = document.getElementById("text6").value;
            var text7 = document.getElementById("text7").value;
            var text8 = document.getElementById("text8").value;
            document.getElementById("sum").value = text1 * 1 + text2 * 1 + text3 * 1 + text4 * 1 + text5 * 1 + text6 * 1 + text7 * 1 + text8 * 1;
        }
    }
}


function myrefresh() { //在judgeSum()判定玩家所输入总棋子数过大时刷新界面
    window.location.reload();
}

function judgeSum() { //限制棋子的总数
    var sum = document.getElementById("sum").value;
    console.log(sum);
    if (sum > 100) {
        alert("^_^呀！这次输入的数值有些大了呢，重新输入吧！！！");
        myrefresh();

    }

}



function drawChess() { //生成棋子
    //console.log(2);
    // var text1 = document.getElementById("text1").value;
    // var text2 = document.getElementById("text2").value;
    // var text3 = document.getElementById("text3").value;
    var text4 = document.getElementById("text4").value;
    var text5 = document.getElementById("text5").value;
    var text6 = document.getElementById("text6").value;
    var text7 = document.getElementById("text7").value;
    var text8 = document.getElementById("text8").value;

    for (var i = 0; i < document.getElementById("text1").value; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img id='img' class='img' src='img/black.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");
        console.log(111111);

    };

    for (var i = 0; i < document.getElementById("text2").value; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img id='img' class='img' src='img/white.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");
        console.log(222222);
    };

    for (var i = 0; i < document.getElementById("text3").value; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img class='img' src='img/red.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    for (var i = 0; i < text4; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img class='img' src='img/blue.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    for (var i = 0; i < text5; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;

        $(".buttons").append("<img class='img' src='img/green.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    for (var i = 0; i < text6; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img class='img' src='img/yellow.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    for (var i = 0; i < text7; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img class='img' src='img/pink.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    for (var i = 0; i < text8; i++) {
        var top = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        var left = parseInt(Math.floor(Math.random() * 11)) * 40 + 90;
        chess[(left - 90) / 40][(top - 90) / 40] = 1;
        $(".buttons").append("<img class='img' src='img/purple.png' style='position:absolute; top:" + top + "px;left:" + left + "px;'>");

    };

    $(".img").click(function() { //点击棋子棋子消失的点击事件
        // console.log(3);

        $(this).hide();

        left = $(this).css("left");
        top = $(this).css("top");

        if (left.length == 4) {
            left = parseInt(left.substring(0, 2));
        } else if (left.length == 5) {
            left = parseInt(left.substring(0, 3));
        }

        if (top.length == 4) {
            top = parseInt(top.substring(0, 2));
        } else if (top.length == 5) {
            top = parseInt(top.substring(0, 3));
        }

        chess[(left - 90) / 40][(top - 90) / 40] = 0;

        judgeWin();

    });
}