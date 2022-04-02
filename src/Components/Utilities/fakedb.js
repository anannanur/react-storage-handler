const addTodb = id => {

    // const quantity = localStorage.getItem(id);
    // if(quantity){
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id , newQuantity);
    // }
    // else{
    //     localStorage.setItem(id , 1);
    // }


    // let shoppingCart;

    // let storedCart = localStorage.getItem('shopping-cart');
    // console.log(storedCart,shoppingCart);
    // if(storedCart){
    //     shoppingCart = JSON.parse(storedCart);
    //     console.log(storedCart,shoppingCart);
    // }
    // else{
    //     shoppingCart = {};
    //     console.log(storedCart,shoppingCart);
    // }


    // const quantity = shoppingCart[id];
    // console.log(quantity);
    // if(quantity){
    //     const newQuantity = quantity + 1;
    //     shoppingCart[id] = newQuantity;
    //     console.log(shoppingCart[id]);
    // }
    // else{
    //     shoppingCart[id] = 1;
    //     console.log(shoppingCart[id]);
    // }
    // console.log(shoppingCart);
    // console.log(typeof shoppingCart[id]);
    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    let shoppingCart;

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
const removeCartDb = id => {
    const storedCart = localStorage.getItem("shopping-cart");
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}
const deleteShopiingCart = () => {
    localStorage.removeItem("shopping-cart");
}

export { addTodb, removeCartDb, deleteShopiingCart };