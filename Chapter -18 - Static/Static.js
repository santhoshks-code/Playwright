class TestRunner {
    static totalTestCase = 0;
    static passCount = 0;
    constructor(name, passed){
        this.name = name;
        TestRunner.totalTests++;
        if(passed){
        TestRunner.PassCount++;
    }
}

}

new TestRunner("LoginTest", true);
new TestRunner("Singup", false);
console.log(TestRunner.totalTestCase);
console.log(TestRunner.passCount);
// console.log(t1.totalTestCase);