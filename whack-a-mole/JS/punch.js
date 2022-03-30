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
    }, { duration: 800 })

    $(head).animate({
        top: '+=100px',
    }, 800, function() {
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
        }, getRandom(100, 6000));

    })
}


$("#Show").on('click', function() {
    $("#Show").attr("disabled", true)
    $("#set_time").click()
    $("#set_time").attr("disabled", true)
    showTime()
    Showhead('#d1 > #Hanhead_1', 0)
    Showhead('#d1 > #Hanhead_2', 0)
    Showhead('#d1 > #Hanhead_3', 0)
    Showhead('#d1 > #Hanhead_4', 0)
    Showhead('#d0 > #Hanhead_1', 0)
    Showhead('#d0 > #Hanhead_2', 0)
    Showhead('#d0 > #Hanhead_3', 0)
    Showhead('#d0 > #Hanhead_4', 0)
})

$("#Show2").on('click', function() {
    $("#Show").attr("disabled", true);
    location.reload();
})




var score = 0;


// 打到韓國瑜的頭換頭
$("#Hanhead_1, #Hanhead_2, #Hanhead_3,#Hanhead_4").on("click", function(event) {
    console.log($(event.currentTarget).attr("src"))

    if ($(event.currentTarget).attr("src") == "IMG/Head1.png") {
        $(event.currentTarget).attr("src", "IMG/Hanhead2.png")
        $(event.currentTarget).css("width", "200px")
        score += 1;

    }
    if ($(event.currentTarget).attr("src") == "IMG/K.png") {
        $(event.currentTarget).attr("src", "IMG/K2.png")
        $(event.currentTarget).css("width", "170px")
        score -= 2;
    }


    if (score < 0) {
        $("#score > p").css("background-color", "blue")
        $("#score > p").css("color", "white")
    } else {
        $("#score > p").css("background-color", "white")
        $("#score > p").css("color", "red")
    }


    if (score == 0) {
        $("#score > p").text("0" + score)
    }
    if (score < 0 || score >= 10) {
        $("#score > p").text(score)
    }
    if (score < 10 && score > 0) {
        $("#score > p").text("0" + score)
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

$("#set_time").on('click', function() {

    var set = +$("#time-control").val()
    $("#time > p").text(set)
    time = +$("#time > p").text()
})



var time;


function showTime() {

    time -= 1

    $("#time > p").text(time)
    if (time < 10) {
        $("#time > p").text("0" + time)
    }

    if (time == 0) {
        //location.href = 'http://www.dotblogs.com.tw/puma/';
        alert("您獲得" + score + "分")
        location.reload();
        var newwin = window.open(); //此行一定要如此書寫,否則失效
        if (score < 0) {
            newwin.location = 'https://www.youtube.com/watch?v=2pCaPWrTp40';
        } else {
            newwin.location = "https://www.facebook.com/groups/427276971375953/";
        }
        return 0;
    }

    //每秒執行一次,showTime()
    setTimeout("showTime()", 1000);
}