import { useContext } from 'react';
import Card from '../ui/Card';

import ShoppingCart from '../../store/shoppingcart';

import classes from './ProductCounter.module.css';

export default function ProductCounter() {
    const cartCTX = useContext(ShoppingCart);
    const list = cartCTX.itemsInCart;
    let runningTotal = 0;
    let totalCount = 0;

    if (cartCTX.itemsInCart) {
        cartCTX.itemsInCart.forEach(item => {
            runningTotal += (parseFloat(item.price) * item.countincart);
        })
    } else {
        runningTotal = 0;
    }

    if (cartCTX.itemsInCart) {
        cartCTX.itemsInCart.forEach(item => {
            totalCount += parseInt(item.countincart);
        })
    } else {
        totalCount = 0;
    }

    return (
        <Card>
            <p className={classes.counter}>Products in cart: <span>{totalCount}</span></p>
            {totalCount > 0 && <nobr><p className={classes.total}>Total: <span>{runningTotal.toFixed(2)} space$</span></p></nobr>}
            {totalCount > 0 && <ul className={classes.itemlist}>Products:</ul>}
            {list && list.map((product) =>
                <li key={product.id} className={classes.listitem}>{product.name} ({product.price} space$, {product.countincart} {product.countincart === 1 ? 'pc' : 'pcs'})</li>
            )
            }
        </Card>
    );
}
