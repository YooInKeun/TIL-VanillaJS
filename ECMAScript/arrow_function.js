// Function
function plusOne(num) {
    return num + 1;
}
console.log(plusOne(10));

// Arrow Function
plusOne = (num) => {
    return num + 1;
}
console.log(plusOne(10));

// Arrow Function without brace(Error)
plusOne = (num) => return num + 1;
console.log(plusOne(10));

// Arrow Function without "return"
plusOne = (num) => num + 1;
console.log(plusOne(10));

// Arrow Function without parameter parentheses(when parameter is one)
plusOne = num => num + 1;
console.log(plusOne(10));



// Arrow Function in Array map() Method 
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

// Function
arrMap = arr.map(function(val) {
    return val * 2;
})

// Arrow Function
arrMap = arr.map(val => { return val * 2 });
console.log(arrMap);

// Arrow Function without brace and "return"
arrMap = arr.map(val => val * 2);
console.log(arrMap);



// Arrow Function in Array filter() method
arrFilter = arr.filter(val => val > 10);
console.log(arrFilter);