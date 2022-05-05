import { useContext } from 'react';
import Card from '../ui/Card';

import ShoppingCart from '../../store/shoppingcart';

import classes from './ProductCounter.module.css';

export default function ProductCounter() {
    const cartCTX = useContext(ShoppingCart);
    const list = cartCTX.uniqueItemsInCart;
    let runningTotal = 0;

    cartCTX.itemsInCart.forEach(item => {
        runningTotal += parseFloat(item.price);
    });

    return (
        <Card>
            <p className={classes.counter}>Products in cart: <span>{cartCTX.totalItemsInCart}</span></p>
            {cartCTX.totalItemsInCart > 0 && <nobr><p className={classes.total}>Total: <span>{runningTotal.toFixed(2)} space$</span></p></nobr>}
            {cartCTX.totalItemsInCart > 0 && <ul className={classes.itemlist}>Products:</ul>}
            {list && list.map((product) =>
                <li key={product.id} className={classes.listitem}>{product.name} ({product.price} space$, {product.countincart} {product.countincart === 1 ? 'pc' : 'pcs'})</li>
            )
            }
        </Card>
    );
}
