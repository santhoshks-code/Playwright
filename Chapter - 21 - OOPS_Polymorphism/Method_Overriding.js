class BaseTest {
    setup(){
        console.log ("BaseTest: open browser");
    }
}

class APIPage extends BaseTest {
    setup(){
        console.log("APITest: Open Browser");
    }
}

let test = new APIPage ();
test.setup();

// call object method and override class 
// Without object calls the BaseTest method

let btest = new BaseTest();
btest.setup();