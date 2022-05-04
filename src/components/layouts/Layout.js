import { useContext, useState } from 'react';

import ShoppingCart from '../../store/shoppingcart';
import ProductForm from '../products/ProductForm';
import ProductCounter from '../products/ProductCounter';
import ProductGrid from '../products/ProductGrid';
// Dummy list for products
// import { products } from '../../assets/products';

import classes from './Layout.module.css';

export default function Layout() {
    const cartCTX = useContext(ShoppingCart);

    // In order to use dummydata, uncomment following
    const productList = cartCTX.itemsOnProductList/*.concat(products)*/;

    return (
        <main className={classes.mainlayout}>
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
