console.log("Yes")

function Draw() {
    var poker_list = [];

    for (i = 0; i < 5; i++) {
        // console.log(i)

        while (true) {
            // random 取出，放大
            var number = Math.random() * 52;
            // 位移
            number = Math.floor(number) + 1
            if (poker_list.includes(number)) {
                continue
            } else {
                poker_list.push(number)
                break
            }
        }
    }
    return poker_list
}

var newCard = (item) => {
    $img = $('<img>').attr('class', 'image').attr('src', item.image)
    $col = $('<div>').attr('class', 'col-*').append($img)
    $('#data').append($col)
}


$('#query').on('click', function() {
    var Cards = Draw()

    for (i = 0; i < 5; i++) {
        var Card = Cards[i]

        var img0 = $('#data img').get(i)
        var $img0 = $(img0)
        $img0.attr('src', "poker/pic" + Card + ".png")

    }
    console.log(Cards)
})

$('#data img').get(0)