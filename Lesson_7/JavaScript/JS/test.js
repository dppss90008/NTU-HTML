console.log("程式執行2");


var x;
var Prime = function(x) {
    var ct = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            ct += 1;
        }
    }
    return ct;
}


var IsPrime = function() {
    var a = $("#exampleInputAge").val();
    if (Prime(a) == 2) {
        $("#Output").val(a + " 是質數");
    } else {
        $("#Output").val(a + " 不是質數");
    }
}


$("#RUN").on("click", IsPrime)