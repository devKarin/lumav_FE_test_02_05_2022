import { createContext, useState } from 'react';

const ShoppingCart = createContext({
    // Set the initial context values
    itemsOnProductList: [],
    totalItemsOnProductList: 0,
    addToProductsList: (_productToList) => {/* Just a comment */ },
    removeFromProductList: (_productId) => { /* Just a comment */ },
    productIsInList: (_productId) => { /* Just a comment */ },
    itemsOnCart: [],
    totalItemsOnCart: 0,
    runningTotal: 0,
    addToCart: (_itemToCart) => { /* Just a comment */ },
    removeFromCart: (_itemId) => { /* Just a comment */ },
    removeOneFromCart: (_itemId) => { /* Just a comment */ },
    itemIsOnCart: (_itemId) => { /* Just a comment */ },
});

// Named export
export function ShoppingCartProvider(props) {
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);

    // Add products to grid
    function addToProductsListHandler(productToList) {
        setList((prevList) => {

            return prevList.concat(productToList);
        });
    }

    // Remove products from grid
    function removeFromProductListHandler(productId) {
        setList((prevList) => {

            return prevList.filter(item => item.id !== productId)
        })
    }

    // Check whether the product is in grid
    function productIsInListHandler(productId) {

        return list.some(item => item.id === productId);
    }

    // Add product to shoppingcart
    function addToCartHandler(itemToCart) {
        setCart((prevOnCart) => {

            return prevOnCart.concat(itemToCart);
        });
    }

    // Remove product from shoppingcart (including duplicates)
    function removeFromCartHandler(itemId) {
        setCart((prevCart) => {

            return prevCart.filter(item => item.id !== itemId)
        })
    }

    // Remove only one instace of the product from shoppingcart (excluding duplicates) i.e reduce product amount
    function removeOneFromCartHandler(itemId) {
        setCart((prevCart) => {
            const indexOfDuplicate = prevCart.findIndex(item => item.id === itemId);

            if (indexOfDuplicate > -1) {
                return prevCart.filter(item => prevCart.indexOf(item) !== indexOfDuplicate);
            } else {
                return prevCart;
            }
        });
    }

    // Check whether the product is on the shoppingcart
    function itemIsOnCartHandler(itemId) {

        return cart.some(item => item.id === itemId);
    }

    // New context values
    const context = {
        itemsOnProductList: list,
        totalItemsOnProductList: list.length,
        addToProductsList: addToProductsListHandler,
        removeFromProductList: removeFromProductListHandler,
        productIsInList: productIsInListHandler,
        itemsOnCart: cart,
        totalItemsOnCart: cart.length,
        runningTotal: 0,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        removeOneFromCart: removeOneFromCartHandler,
        itemIsOnCart: itemIsOnCartHandler,
    };

    // Set the latest updated context values using value prop
    return (
        <ShoppingCart.Provider value={context}>
            {/** All the components wrapped with Provider */}
            {props.children}
        </ShoppingCart.Provider>
    );
}

export default ShoppingCart;
