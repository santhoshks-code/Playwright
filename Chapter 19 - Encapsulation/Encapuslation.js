// Encapsulating Varibales from outside
// Encapsulation works within the class
//	Keep your variables private
// Private variable are only allowed through gets and setters.

class Family {
    #son1;
    #son2;
    #girl1;

    constructor(son1, son2, girl1) {
        this.#son1 = son1;
        this.#son2 = son2;
        this.#girl1 = girl1;
    }

    getFamilyMembers() {
        return {
            son1: this.#son1,
            son2: this.#son2,
            girl1: this.#girl1,
        };
    }

    updateGirl1(name) {
        this.#girl1 = name;
    }
}

const family = new Family('Pramod', 'Ravi', 'Sita');
console.log(family.getFamilyMembers());
family.updateGirl1('Meera');
console.log(family.getFamilyMembers());