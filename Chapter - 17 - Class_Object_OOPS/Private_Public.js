class Credentials {
     user;
    constructor(user, key) {
        this.user = user; //Public
        this.#apiKey = key; //Private
    }

getAuthHeader() {
    return "bearer " + this.#apikey;
}
}

let cred = new Credentials("admin", "Secretkey_1234");
console.log(cred.user);