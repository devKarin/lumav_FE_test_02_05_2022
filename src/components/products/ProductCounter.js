import { useContext } from 'react';
import Card from '../ui/Card';

import ShoppingCart from '../../store/shoppingcart';

import classes from './ProductCounter.module.css';

export default function ProductCounter() {
    const cartCTX = useContext(ShoppingCart);

    return (
        <Card>
            <p className={classes.counter}>Products in cart: {cartCTX.totalItemsOnCart}</p>
            <p>Running total: {cartCTX.runningTotal} €</p>
        </Card>
    );
}