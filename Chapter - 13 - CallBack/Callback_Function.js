//callme when you are done

function placeOrder(item, callback){
console.log("Order placed.....");
callback();

}
placeOrder("Burger", function(){
    console.log("Order is ready, please pick it up");
    
});
