const add = (num1, num2) => {
    return num1 + num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}

// const numbers = [20,30,40,50,60];
// const reducer = (previous,current) => previous + current;
// const total = numbers.reduce(reducer,0);

// const items = [
//     { id: 1, name: 'alta', price: 200 },
//     { id: 2, name: 'malis', price: 400 },
//     { id: 3, name: 'palish', price: 500 },
//     { id: 4, name: 'nalish', price: 600 },
//     { id: 5, name: 'balish', price: 700 }
// ];
// const reducer = (previous , current) => previous + current.price; 
// const total = items.reduce(reducer ,0);


const getTotalPrice = products =>{
    const total = products.reduce(
        ((previous,current) => previous + current.price),0);
        return total;
}

export { add, multiply,getTotalPrice as getTotal };