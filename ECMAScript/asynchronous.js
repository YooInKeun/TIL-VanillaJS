function sayHello() {
    setTimeout(() => {
        console.log("Hello");
        sayGoodbye();
    }, 2000);
};

sayGoodbye = () => {
    console.log("Good Bye");
};

sayHello();