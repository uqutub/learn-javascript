var num1 = 1
var num2 = 2
var num3 = calc();

function calc() {
    var total = num1 + num2;
    console.log('adding sync');
    return total;
}

console.log(num3);