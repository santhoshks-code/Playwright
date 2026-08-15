function placeOrder(item, callback){
    console.log("order was placed correctly");
    callback();
}

// define
function print(){
    console.log("Normal Fn - done with the order");

}

//First way
placeOrder("Burger", print);

//Second way
placeOrder("Burger", function(){
    console.log("order will be ready in 5 mins, take it");
});

//Third way - Arrow function
placeOrder("Pizza", () => {
    console.log("Arrow function, without a function name")
});