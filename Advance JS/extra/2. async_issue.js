var num1 = 1
var num2 = 2
var num3 = calc();

function calc() {
    var total = null;
    setTimeout(() => {
        console.log('adding async')
        total = num1 + num2;
    }, 50)
    return total;
}

console.log(num3);