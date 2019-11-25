// callback

var num1 = 1
var num2 = 2
var num3 = calc(showTotal);

function calc(myCallBack) {
    var total = null;
    setTimeout(() => {
        console.log('adding async')
        total = num1 + num2;
        num3 = total;
        myCallBack();
    }, 50);
}

function showTotal() {
    console.log('SUM Result ', num3);
}