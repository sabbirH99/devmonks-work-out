function cartTotal(items, price) {
    let totalPrice = 0;

    if(items >= 10) {
        discount = (items * price) / 100 * 20
        totalPrice = (items * price) - discount
    } else if (items >= 5) {
        discount = (items * price) / 100 * 10
        totalPrice = (items * price) - discount
    } else {
        totalPrice = items * price;
    }

    return totalPrice;
}


console.log(cartTotal(3, 10));   // < 5 items — expect no discount → 30
console.log(cartTotal(7, 10));   // 5-9 items — expect 10% off → 63
console.log(cartTotal(15, 10));  // 10+ items — expect 20% off → 120
'use strict';
console.log(cartTotal(7, 10));

/* 
Reason for invalid result: the "=>" comparison operator is not right which should be ">="

Another oversight is: my first comarison logic was (items greater than or equal to 5). But 10 is also falls under this thresholds as well as the 5. 
So 10 will never reach second block. 
*/

