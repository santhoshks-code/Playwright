class Bug {
    constructor(newTitle, newSeverity) {
        this.title = newTitle;
        this.serverity = newSeverity;
    }

    display() {
        console.log ("[" + this.severity + "]" + this.title);
    }
}

let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Type in Footer", "Low");

b1.display();
b2.display();
