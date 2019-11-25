// function clouser(a) {
//     var b = a;
//     setTimeout(function () {
//         console.log('clouser val: ', b);
//     });
// }
// function call() {
//     var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
//     for (var i = 0; i < arr.length; i++) {
//         clouser(arr[i]);
//     }
// }
// call();


function callCount() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
var counter = callCount();
counter();
counter();
counter();
