
// task 1 : Clouser
var arr2 = [
    1, 2, 3, 4, 5
];

function abc() {
    for (var i = 0; i < arr2.length; i++) {
        xyz(arr2[i]);
    }
}

function xyz(item) {
    setTimeout(() => {
        console.log(item);
    }, 1000);
}

console.log('calling abc func');
abc();

// task 2 : task using callback show serialize: recursion

var arr = [
    { id: 1, timer: 1000 },
    { id: 2, timer: 2000 },
    { id: 3, timer: 500 },
    { id: 4, timer: 800 },
];