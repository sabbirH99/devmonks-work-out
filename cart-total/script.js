function cartTotal(items, price) {
    let totalPrice = 0;

    if(items => 5) {
        discount = (items * price) / 100 * 10
        totalPrice = (items * price) - discount
    } else if (items => 10) {
        discount = (items * price) / 100 * 20
        totalPrice = (items * price) - discount
    } else {
        totalPrice = items * price;
    }

    return totalPrice;
}


console.log(cartTotal(10, 4));