$(() => {
    $('#insert').on('click', function() {
        var data = {
            item: {

                name: $('#inputProductName').val(),
                price: +$('#inputProductPrice').val(),
                count: +$('#inputProductCount').val(),
                image: $('#inputProductImage').val(),

            }

        }
        console.log(data)

        $.post('https://js.kchen.club/R06B42001/insert', data, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('新增成功')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('新增失敗')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }
        })
    })

})