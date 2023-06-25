"use client";
import { createContext, useState } from 'react';

const ShoppingCart = createContext({
    // Set the initial context values
    itemsOnProductList: [],
    totalItemsOnProductList: 0,
    addToProductList: (_productToAdd) => {/* Just a comment */ },
    removeFromProductList: (_productId) => { /* Just a comment */ },
    productIsOnList: (_productId) => { /* Just a comment */ },
    itemsInCart: [],
    addToCart: (_itemToAdd) => { /* Just a comment */ },
    removeFromCart: (_itemId) => { /* Just a comment */ },
    removeOneFromCart: (_itemId) => { /* Just a comment */ },
    itemIsInCart: (_itemId) => { /* Just a comment */ },
});

// Named export
export function ShoppingCartProvider(props) {
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);

    // Add products in the grid
    function addToProductListHandler(productToAdd) {
        setList((prevList) => {
            const duplicate = prevList.find(item => item.id === productToAdd.id);

            if (duplicate) {

                return prevList;
            } else {

                return prevList.concat(productToAdd);
            }
        });
    }

    // Remove products from grid
    function removeFromProductListHandler(productId) {
        setList((prevList) => {

            return prevList.filter(item => item.id !== productId)
        })
    }

    // Check whether the product is in grid
    function productIsOnListHandler(productId) {

        return list.some(item => item.id === productId);
    }

    // Add product to shoppingcart
    function addToCartHandler(itemToAdd) {
        itemToAdd.countincart = parseInt(itemToAdd.countincart) + 1;

        setCart((prevCart) => {
            const duplicate = prevCart.find(item => item.id === itemToAdd.id);

            if (duplicate) {
                duplicate.countincart = parseInt(duplicate.countincart) + 1;

                return prevCart.filter(item => item.id !== duplicate.id).concat(duplicate);

            } else {

                return prevCart.concat(itemToAdd);
            }
        });
    }

    // Remove product from shoppingcart (including duplicates)
    function removeFromCartHandler(itemId) {

        setCart((prevCart) => {

            return prevCart.filter(item => item.id !== itemId);
        });
    }

    // Reduce product amount in the shoppingcart or remove product from cart, if the amount is below 1
    function removeOneFromCartHandler(itemId) {

        setCart((prevCart) => {
            const duplicate = prevCart.find(item => item.id === itemId);

            if (duplicate && duplicate.countincart > 0) {
                duplicate.countincart = parseInt(duplicate.countincart) - 1;

                return prevCart.filter(item => item.countincart > 0)
            }
        });
    }

    // Check whether the product is in the shoppingcart
    function itemIsInCartHandler(itemId) {

        return cart.some(item => item.id === itemId);
    }

    // New context values
    const context = {
        itemsOnProductList: list,
        totalItemsOnProductList: list.length,
        addToProductList: addToProductListHandler,
        removeFromProductList: removeFromProductListHandler,
        productIsOnList: productIsOnListHandler,
        itemsInCart: cart,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        removeOneFromCart: removeOneFromCartHandler,
        itemIsInCart: itemIsInCartHandler,
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
