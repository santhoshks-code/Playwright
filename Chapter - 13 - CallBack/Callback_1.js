function test(test, callMeWhenDone){
console.log("Hi, Start the Test case");
callMeWhenDone();

}

test("Verify the login page is working", async (page) => {

});

function garimaStory(items, callMeWhenStoreIsEmpty){
    console.log("Store is busy");

    console.log("Store is Empty");
    (callMeWhenStoreIsEmpty());

}

garimaStory("Verify if store is open", async (page) => {

});

function garimafunctionBuy(){
    console.log("Lets start shopping.....");
}

garimaStory("Starting shopping", () => {
    console.log("lest go for shopping")
});
