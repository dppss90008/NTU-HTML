console.log("Test javascript is ok")

// $img = $('<img>').attr('class', 'image').attr('src', "IMG/Head1.png")
// $("#d0").append($img)

// $("#Hanhead").hide()


// 設定韓國瑜頭的位置
// 上面圖層
var d1_LOC = [
    [380, 410],
    [575, 425],
    [760, 400],
    [920, 460]
]

for (let i = 1; i < d1_LOC.length + 1; i++) {
    console.log("Hanhead" + i)
    $("#d1 > #Hanhead_" + i).css("left", d1_LOC[i - 1][0])
    $("#d1 > #Hanhead_" + i).css("top", d1_LOC[i - 1][1])
}

// 下面圖層
var d0_LOC = [
    [190, 440],
    [370, 500],
    [650, 530],
    [935, 550]
]

for (let i = 1; i < d0_LOC.length + 1; i++) {
    console.log("Hanhead" + i)
    $("#d0 > #Hanhead_" + i).css("left", d0_LOC[i - 1][0])
    $("#d0 > #Hanhead_" + i).css("top", d0_LOC[i - 1][1])
}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var Showhead = (head, show = 0) => {
    var origin = $(head).css("top");
    if (show == 0) {
        $(head).hide()
    } else {
        $(head).show()
    }
    $(head).animate({
        top: '-=80px',
    }, { duration: 1000 })

    $(head).animate({
        top: '+=100px',
    }, 1000, function() {
        $(head).hide();
        $(head).css("top", origin);

        if (getRandom(0, 1) == 1) {
            $(head).attr("src", "IMG/Head1.png");
            $(head).css("width", "160px");
        } else {
            $(head).attr("src", "IMG/K.png");
            $(head).css("width", "170px");
        }


        //$(head).finish();
        setTimeout(function() {
            Showhead(head, 1)
        }, getRandom(100, 8000));

    })
}



Showhead('#d1 > #Hanhead_1', 0)
Showhead('#d1 > #Hanhead_2', 0)
Showhead('#d1 > #Hanhead_3', 0)
Showhead('#d1 > #Hanhead_4', 0)
Showhead('#d0 > #Hanhead_1', 0)
Showhead('#d0 > #Hanhead_2', 0)
Showhead('#d0 > #Hanhead_3', 0)
Showhead('#d0 > #Hanhead_4', 0)






// 打到韓國瑜的頭換頭
$("#Hanhead_1, #Hanhead_2, #Hanhead_3,#Hanhead_4").on("click", function(event) {
    console.log($(event.currentTarget).attr("src"))

    if ($(event.currentTarget).attr("src") == "IMG/Head1.png") {
        $(event.currentTarget).attr("src", "IMG/Hanhead2.png")
        $(event.currentTarget).css("width", "200px")
    }
    if ($(event.currentTarget).attr("src") == "IMG/K.png") {
        $(event.currentTarget).attr("src", "IMG/K2.png")
        $(event.currentTarget).css("width", "170px")

    }

})

// 定義滑鼠圖示
$(function() {
    $("#testarea,#Show").on("click", function() {
        $("#MouseIMG").attr("src", "IMG/knocked.png")
            // wait(2)

        setTimeout(function() {
            $("#MouseIMG").attr("src", "IMG/knock1.png");
        }, 200);
        //    $("#MouseIMG").attr("src", "IMG/knock1.png")
        // $("#MouseIMG").attr("src", function(index, currentSource) {
        //     return currentSource == 'IMG/knocked.png' ? 'IMG/knock1.png' : 'IMG/knocked.png';
        // })
        // console.log("click")
    })

    $("#testarea,#Show").mousemove(function(e) {
        $(".cursor").show().css({
            "left": e.clientX - 100,
            "top": e.clientY - 100
        });
    })

    $(".Hanhead,#Show").mousemove(function(e) {
        $(".cursor").show().css({
            "left": e.clientX - 100,
            "top": e.clientY - 100
        });
    })

    $(".Hanhead,#Show").on("click", function() {
        $("#MouseIMG").attr("src", "IMG/knocked.png")
            // wait(2)

        setTimeout(function() {
            $("#MouseIMG").attr("src", "IMG/knock1.png");
        }, 200);
        //    $("#MouseIMG").attr("src", "IMG/knock1.png")
        // $("#MouseIMG").attr("src", function(index, currentSource) {
        //     return currentSource == 'IMG/knocked.png' ? 'IMG/knock1.png' : 'IMG/knocked.png';
        // })
        // console.log("click")
    })
})


// 倒數計時器
$("#time > p").text("10")


var time = +$("#time > p").text()
var t = time;

function showTime() {

    t -= 1;
    time -= 1

    $("#time > p").text(time)
    if (t < 10) {
        $("#time > p").text("0" + time)
    }

    if (t == 0) {
        //location.href = 'http://www.dotblogs.com.tw/puma/';
        return 0;
    }

    //每秒執行一次,showTime()
    setTimeout("showTime()", 1000);
}

showTime()