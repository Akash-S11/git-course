// console.log("Good Morning");
// setTimeout(function () {
//     console.log("Welcome to Javascript");
// }, 5000;
// console.log("season 2");

// const cart = ["shirt", "pants", "wallet"]
// To Order

// 1) create a order
// 2) proceed to payment

// api.createOrder(cart, function(){
//     api.paymentOrder();
// });


//here payment order works only after createOrder() is invoked. we have dependency

const cart = ["shirt", "pants", "wallet"];


const user = createOrder(cart);

user.then(function(orderID){
    proccedToPayment(orderID);
});

function createOrder(cart){
    const promise = new Promise(function (resolve, reject){
        if(!vaildateCart(cart)){
            const err = new Error("Cart not valid");
            reject(err);
        }
        const orderID = "12345";
        if (orderID){
            resolve(orderID);
        }
        });
        return promise;
}