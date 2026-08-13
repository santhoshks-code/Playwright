function test(test, callMeWhenDone){
console.log("Hi, Start the Test case");
callMeWhenDone();

}

test("Verify the login page is working", async (page) => {

});

function garimaStroy(items, callMeWhenStoreIsEmpty){
    console.log("Store is busy");

    console.log("Store is Empty");
    (callMeWhenStoreIsEmpty());

}

garimaStroy("Verify if store is open", async (page) => {

});