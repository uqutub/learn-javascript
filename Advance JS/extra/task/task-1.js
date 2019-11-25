var fruits = ['orange 2', 'apple 1', 'banana 3', 'apple 4', 'cherry 4'];

// result should be:
// apple 5
// cherry 4
// banana 3
// orange 2

// solution
var obj = {};
fruits.forEach(f => {
    var name = f.split(' ')[0] 
    var count = parseInt(f.split(' ')[1]);
    obj[name] = obj[name] ? obj[name] + count : count;
})

Object.keys(obj).sort((a,b) => {
    return obj[b] - obj[a];
}).map(f => `${f} ${obj[f]}`);







const fruits = ['grape 3', 'banana 1', 'grape 2', 'banana 3', 'apple 4', 'avocado 5'];
let obj = fruits.reduce((o, item) => {
  let [name, qty] = item.split(' ');
  o[name] = item[name] ? item[name] + qty : qty;
  return o
}, {});

let results = Object.keys(obj).sort().sort((a,b) => obj[b] - obj[a]).map(f => `${f} ${obj[f]}`);
console.log(results)