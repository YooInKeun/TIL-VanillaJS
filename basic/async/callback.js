'use strict';

console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// callback hell
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'aiden' && password === 'pass') {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        });
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'aiden') {
                onSuccess({ name: 'aiden', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password,
    (user) => {
        userStorage.getRoles(user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            })
    },
    (error) => {
        console.log(error)
    }
);
