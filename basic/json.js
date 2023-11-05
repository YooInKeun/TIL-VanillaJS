// 1. json 동적 추가/제거
const aiden = { name: "aiden", age: 20 };
aiden.hasJob = true; // 동적으로 추가 가능
delete aiden.age; // 동적으로 제거 가능

aiden['name'] // 이렇게 접근도 가능함(string 타입으로 지정해야 함)
aiden['hasJob'] = true; // 동적으로 추가 가능 

// 2가지의 차이는? 동적으로 key 값을 받아올 때는 computed property 를 쓰면 좋음
function printValue(obj, key) {
	console.log(obj[key]);
}

printValue(aiden, 'name');

// 2. property value shorthand
function makePerson(name, age) {
	return {
		name,
		age,
	}
}

const person = makePerson('aiden', 20);

console.log(person);

// 3. json with operator
console.log('name' in aiden);

let json = JSON.stringify(true);
console.log(json);

// 4. for in vs for of
for (key in aiden) {
	console.log(key);
}

const array = [1, 2, 3, 4];
for (value of array) {
	console.log(value);
}

// 5. cloning
const aiden2 = { name: "aiden", age: 20 };
const aiden3 = aiden2;
aiden2.name = 'coder';
console.log(aiden2);

// old way
const aiden4 = {};
for (key in aiden2) {
	aiden4[key] = aiden2[key];
}

// new way
const user = Object.assign({}, aiden2);

// 6. stringify
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