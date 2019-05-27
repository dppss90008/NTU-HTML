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
    })
})