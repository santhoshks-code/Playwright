let order = new Promise(function(resolved, rejected){
    let foodready = true;
    if (foodready){
        resolved("Pizza is ready")
    } else {
        rejected("Order cancelled")
    }
    });

    console.log(order);

