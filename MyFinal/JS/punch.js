console.log("QQ")

// $img = $('<img>').attr('class', 'image').attr('src', "IMG/Head1.png")
// $("#d0").append($img)

// $("#Hanhead").hide()

var origin = $("#Hanhead").css("top");


// 設定頭的位置

var d1_LOC = [
    [240, 410],
    [435, 440],
    [625, 400],
    [785, 460]
]

for (let i = 1; i < d1_LOC.length + 1; i++) {
    console.log("Hanhead" + i)
    $("#Hanhead_" + i).css("left", d1_LOC[i - 1][0])
    $("#Hanhead_" + i).css("top", d1_LOC[i - 1][1])
}


var Showhead = (head) => {
    var origin = 410;
    $(head).show()
    $(head).animate({
        top: '-=80px',
    }, { duration: 1000 })

    $(head).animate({
        top: '+=100px',
    }, 1000, function() {
        $(head).hide()
        $(head).css("top", origin)
        $(head).attr("src", "IMG/Head1.png")
        $(head).css("width", "160px")
    })
}



Showhead("#Hanhead_1")
$('#Hanhead_1').promise().done(function() {
    Showhead("#Hanhead_1")
});
$("#Hanhead_1, #Hanhead_2, #Hanhead_3").on("click", function(event) {
    console.log(event.currentTarget)
    $(event.currentTarget).attr("src", "IMG/Hanhead2.png")
    $(event.currentTarget).css("width", "200px")
})

// 定義滑鼠圖示
$(function() {
    $("#testarea").on("click", function() {
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

    $("#testarea").mousemove(function(e) {
        $(".cursor").show().css({
            "left": e.clientX - 100,
            "top": e.clientY - 110
        });
    })

    $(".Hanhead").mousemove(function(e) {
        $(".cursor").show().css({
            "left": e.clientX - 100,
            "top": e.clientY - 110
        });
    })

    $(".Hanhead").on("click", function() {
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
});