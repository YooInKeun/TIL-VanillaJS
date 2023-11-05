let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    jump: () => {
        console.log('jump')
    }
}
json = JSON.stringify(rabbit);
console.log(json);

let obj = JSON.parse(json);
console.log(rabbit);
console.log(obj);

obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);