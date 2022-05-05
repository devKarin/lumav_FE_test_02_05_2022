import { createContext, useState } from 'react';

const ShoppingCart = createContext({
    // Set the initial context values
    itemsOnProductList: [],
    totalItemsOnProductList: 0,
    addToProductList: (_productToAdd) => {/* Just a comment */ },
    removeFromProductList: (_productId) => { /* Just a comment */ },
    productIsOnList: (_productId) => { /* Just a comment */ },
    itemsInCart: [],
    uniqueItemsInCart: [],
    totalItemsInCart: 0,
    addToCart: (_itemToAdd) => { /* Just a comment */ },
    addUniqueItemsToCart: (_itemToAdd) => { /* Just a comment */ },
    removeFromCart: (_itemId) => { /* Just a comment */ },
    removeOneFromCart: (_itemId) => { /* Just a comment */ },
    itemIsInCart: (_itemId) => { /* Just a comment */ },
});

// Named export
export function ShoppingCartProvider(props) {
    const [uniqueCart, setUniqueCart] = useState([]);
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);

    // Add products in the grid
    function addToProductListHandler(productToAdd) {
        setList((prevList) => {

            return prevList.concat(productToAdd);
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

    // Add product into shoppingcart
    function addToCartHandler(itemToAdd) {
        itemToAdd.countincart = parseInt(itemToAdd.countincart) + 1;
        setCart((prevOnCart) => {
            prevOnCart.forEach((item) => {
                if (item.id === itemToAdd.id) {
                    item.countincart = parseInt(item.countincart) + 1;
                }
            });

            return prevOnCart;
        });

        setCart((prevOnCart) => {

            return prevOnCart.concat(itemToAdd);
        });
        addUniqueItemsToCartHandler(itemToAdd);
    }

    function addUniqueItemsToCartHandler(itemToAdd) {
        setUniqueCart((prevCart) => {
            const indexOfDuplicate = prevCart.findIndex(item => item.id === itemToAdd.id);
            if (indexOfDuplicate === -1) {
                return prevCart.concat(itemToAdd);
            } else {
                return prevCart;
            }
        });
    }

    // Remove product from shoppingcart (including duplicates)
    function removeFromCartHandler(itemId) {
        const coreFunction = (prevCart) => {

            return prevCart.filter(item => item.id !== itemId)
        }
        setCart(coreFunction);
        setUniqueCart(coreFunction);
    }

    // Remove only one instace of the product from shoppingcart (excluding duplicates) i.e reduce product amount
    function removeOneFromCartHandler(itemId) {
        const coreFunction = (prevCart) => {
            const indexOfDuplicate = prevCart.findIndex(item => item.id === itemId);

            if (indexOfDuplicate > -1) {
                return prevCart.filter(item => prevCart.indexOf(item) !== indexOfDuplicate);
            } else {
                return prevCart;
            }
        }

        setCart(coreFunction);
        setUniqueCart(coreFunction);
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
        uniqueItemsInCart: uniqueCart,
        totalItemsInCart: cart.length,
        addToCart: addToCartHandler,
        addUniqueItemsToCart: addUniqueItemsToCartHandler,
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
