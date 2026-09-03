class TestCase{
    constructor(name, status, priority){

    }

display(){
    console.log(this.name + " --> " + this.status + " --> " + this.priority);
}

}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signupTest_ref = new TestCase("Signup", "FAIL", "P1");

loginTest_ref.display();
signupTest_ref.display();