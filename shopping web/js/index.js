$(document).ready(function() {
    console.log("OKOK")
        // alert("FILE IS OK !! ")
    $('#product-list').empty();
    $('.pagination').hide()

})

var myJSON = 0;
$("#query").on("click", function() {
    console.log("你按到查詢了!!")
    $('.pagination').show()

    // 如果查詢過，就不用再查詢一次了
    if (myJSON != 0) {
        alert("你已經查詢過了，不用再查了QQQ!")
        return 0;
    }

    $('#product-list').empty();
    $.getJSON("https://js.kchen.club/B12345678/query", function(response) {
        if (response["result"] == true) {
            console.log("有資料傳入");
            $('#product-list').empty();
            myJSON = response;
            myJSON["items"].length
            for (let i = 0; i < 8; i++) {
                newItem(myJSON["items"][i])
            }

        }
    });

})

var newItem = (item) => {
    $img = $('<img>').attr('class', 'image').attr('src', item.image)
    $h3 = $('<h3>').attr('class', 'name').text(item.name)
    $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)
    $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
    $col = $('<div>').attr('class', 'col-*').append($item)
    $('#product-list').append($col)
}

$("#Next").on("click", function() {

    // 測試有沒有按到 click
    console.log("你按到Next")
    $('#product-list').empty();
    // 讓 Active move
    var ID = $($(".active")).children()[0].id
    ID = +ID.split("page")[1]

    if (ID < 5) {
        ID += 1
        $($(".page-item")).removeClass(["active"])
        $(("#page" + ID)).parents().closest('li').addClass('active')
    } else {
        // 如果 Ative在 #page5 則 換頁
        newPage()
    }
    //// 目前在第幾頁，總共多少頁面
    var Total = Math.ceil(myJSON.items.length / 8);
    var Now = $($(".active")).text()
    console.log("目前在第" + Now + "頁，總共" + Total + "頁")

    // 換資料庫
    var page = +$($(".active")).text()
    for (let i = (page - 1) * 8; i < page * 8; i++) {
        newItem(myJSON["items"][i])
    }
})

$("#Previous").on("click", function() {
    console.log("你按到Previous")
    $('#product-list').empty();

    var ID = $($(".active")).children()[0].id
    ID = +ID.split("page")[1]
    if (ID > 1) {
        ID -= 1
        $($(".page-item")).removeClass(["active"])
        $(("#page" + ID)).parents().closest('li').addClass('active')
    } else {
        // 如果 Ative在 #page1 則 換頁
        lastPage()
    }

    // 換資料庫
    var page = +$($(".active")).text()
    for (let i = (page - 1) * 8; i < page * 8; i++) {
        newItem(myJSON["items"][i])
    }
})

$('#page1,#page2,#page3,#page4,#page5').on("click", function(event) {
    $('#product-list').empty();
    $(".NowPage").empty()
    $($(".page-item")).removeClass(["active"])
    var dt = event.delegateTarget;
    $(dt).parents().closest('li').addClass('active')

    var page = +$(dt).text()
    for (let i = (page - 1) * 8; i < page * 8; i++) {
        newItem(myJSON["items"][i])
    }
    NowPage()
})

var newPage = () => {
    var ID;
    var Last = Math.ceil(myJSON.items.length / 8);
    console.log(Last)
    if (+$($("#page5")).text() == Last) {
        return 0;
    }

    for (let i = 1; i < 6; i++) {
        ID = "#" + $('.page-link')[i].id
        console.log(ID);
        var a = +$(ID).text()
        a = a + 1
        $(ID).text(a)
    }
}

var lastPage = () => {
    var ID;

    // 如果page1 是 第一頁則不做事情
    if ($('#page1').text() == 1) {
        return 0;
    }

    for (let i = 1; i < 6; i++) {

        console.log(i)
        ID = "#" + $('.page-link')[i].id
        console.log(ID);
        var a = +$(ID).text()
        a = a - 1
        $(ID).text(a)
    }
}

var NowPage = () => {
    var ID = $($(".active")).text()
    var Total = myJSON.items.length
    var SS = "目前在第" + ID + "頁，總共" + Total + "頁"
    console.log(SS)
    $STR = $('<p>').attr('id', 'NowPage').text(SS)
    $('#PAGE').append($STR)
}