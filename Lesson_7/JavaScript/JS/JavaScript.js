// JS java字串用'' html字串用"""

var str;
// 將 id == demo 的內容 取出
str = document.getElementById('demo').innerHTML;
document.getElementById('demo').innerHTML = str + 'demo'

// ++n n=n+1
// n++ n ; 背後已經n+1
// 3 == '3' True weak datatype (JS)
// typeof a == 'number'

// 3 DataType : Number, String, Object
// JavaScript Object Notation
// Object 使用 JSON格式 person = { name:"老王", height:185, weight:80}
// person['pet'] = {type:'dog',age:5, lenght:20}

// Array var cars=["Honda","Toyota","Benz"]
// cars.length
// typeof car == "under"

// 條件判斷
// if (condition) {

// } else if {

// } else {

// }

// 確定程式是否執行
console.log("程式執行");
// $(selector).action()
// 隱藏
// $("#RUN").hide()
var age;

// 匿名函式
// $("#RUN").on("click", function() {
//     console.log("被按到了");
//     age = $("#exampleInputAge").val();
//     if (age >= 18) {
//         $("#Output").val("已成年，你現在 " + age + "歲");
//     } else {
//         $("#Output").val("未成年，你現在 " + age + "歲");
//     }
//     return age;
// })

var checkAge = function() {
    var age = $("#exampleInputAge").val();
    if (age >= 18) {
        $("#Output").val("已成年，你現在 " + age + "歲");
    } else {
        $("#Output").val("未成年，你現在 " + age + "歲");
    }
    return age;
}
$("#RUN").on("click", checkAge)

// Function也是~~~資料

var max = (a, b) => {
    return (a > b) ? a : b
}