import { useContext } from 'react';

import ShoppingCart from '../../store/shoppingcart';
import ProductForm from '../products/ProductForm';
import ProductCounter from '../products/ProductCounter';
import ProductGrid from '../products/ProductGrid';
import Button from '../ui/Button';

// Dummy list for products
import { products } from '../../assets/products';

import classes from './Layout.module.css';

export default function Layout() {
    const cartCTX = useContext(ShoppingCart);
    let productList = cartCTX.itemsOnProductList;

    function loadDummiesHandler() {
        products.forEach(product => {
            product.id = Math.floor(Math.random() * 500001) + Date.now();
            cartCTX.addOnProductsList(product)
        });
    }

    return (
        <main className={classes.mainlayout}>
            <div className={classes.dummyproductsLoader}>
                <Button text="I'm too lazy, please load dummies for me" onClick={loadDummiesHandler} />
            </div>
            <div className={classes.productformarea}>
                <ProductForm />
            </div>
            <div className={classes.productcounterarea}>
                <ProductCounter />
            </div>
            <div className={classes.productgridarea}>
                <ProductGrid productList={productList} />
            </div>
        </main>
    )
}
