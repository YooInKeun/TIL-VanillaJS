class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

class Experiment {
    publicField = 2;
    #privateField = 0;
}

class Article {
    static publisher = 'aiden coding...';

    static printPublisher() {
        console.log(Article.publisher);
    }
}