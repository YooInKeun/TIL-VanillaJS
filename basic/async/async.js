// clear style of using promise

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('aiden');
    });
}

const user = fetchUser();
user.then(console.log);

async function fetchUser2() {
    return 'aiden';
}

const user2 = fetchUser2();
user2.then(console.log);

// 2. await
function delay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

async function getApple() {
    await delay(3000);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}

function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana()
                .then(banana => `${apple} + ${banana}`)
        })
};

// 콜백 지옥 벗어나기
async function pickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}

// 병렬 실행
async function pickFruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}

// 3. useful promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickFruits().then(console.log);
pickFruits2().then(console.log);
pickFruits3().then(console.log);
pickAllFruits().then(console.log);
pickOnlyOne().then(console.log);