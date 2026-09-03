class TestCase{
    #status = "not run";
    static #count = 0;

    constructor(name){
        this.name = name;
        TestCase.#count++;
    }

    run(pass){ // set status, Can another function as set.
        this.#status = pass ? "PASSED" : "FAILED";
    }

    getStatus(){ return this.#status;}
  //  setStatus(){
    //    throw new Error("Status is read only call null");
    // }

    static getCount() { return TestCase.#count;

    }
}

const tc = new TestCase("Login");
tc.run(true);
console.log(tc.getStatus());
console.log(tc.run());
console.log(TestCase.getCount());