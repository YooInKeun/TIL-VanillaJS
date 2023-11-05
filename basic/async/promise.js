'use strict';

// promise is a javascript object for asynchronous operation.

// 1. producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((reslove, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // reslove('aiden');
        reject(new Error('no network'));
    }, 2000);
});

// 2. consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('finally'));

// 3. promise chaining
const fetchNumber = new Promise((reslove, reject) => {
    setTimeout(() => reslove(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(`${hen} -> egg`), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} -> fry`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => 'bread')
    .then(cook)
    .then(console.log)
    .catch(console.log);