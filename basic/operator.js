// 1. destructuring declaration
const student = { name: "aiden", level: 1 }
const { name, level } = student;
console.log(name, level);

const fruits = ['apple', 'orange'];
const [apple, orange] = fruits;
console.log(apple, orange);

// 2. spread syntax
const array = [{ key: "a" }, { key: "b" }];
console.log(array);

console.log([...array]);

console.log([...array, { key: "c" }]);

const obj = array[0];
console.log({ ...obj });

// 3. default parameter
const printMessage = (message = 'default message') => {
    console.log(message);
};

printMessage();

// 4. ternary operator
console.log(true ? 'true' : 'false');

// 5. optional chanining(ES11)
const manager = null
console.log(manager?.address?.code);

// 6. nullish(ES11)
let code;
console.log(code ?? 'undefined');

const num = 0;
console.log(num ?? 'undefined');