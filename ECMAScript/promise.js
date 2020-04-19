function sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello " + name);
            resolve("Seoul");
        }, 3000)
    }
    )
}

sayHello2("Kevin")
    .then((location) => console.log(location + " Good Bye"));

    
sayHelloBye = async (name) => {
    const location = await sayHello2(name)
    console.log(location + " Good Bye");
}

sayHelloBye("Kevin")