const array= [0, 1, 2, 3];

array.push(4);
console.log(array);

const poped = array.pop();
console.log(array);
console.log(poped);

array.unshift(-1);
console.log(array);

array.shift();
console.log(array);

array.splice(1, 2, 100);
console.log(array);

const subArray = array.slice(1);
console.log(subArray);

console.log(array.indexOf(1));
console.log(array.lastIndexOf(100));
console.log(array.includes(100));
