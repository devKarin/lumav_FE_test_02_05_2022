import { useContext } from 'react';

import ShoppingCart from '../../store/shoppingcart';
import Button from '../ui/Button';
import Card from '../ui/Card';

import classes from './ProductItem.module.css';

export default function ProductItem(props) {
    const cartCTX = useContext(ShoppingCart);
    const itemIsAdded = cartCTX.itemIsOnCart(props.id);

    function removeFromGridHandler() {
        cartCTX.removeFromCart(props.id);
        cartCTX.removeFromProductList(props.id);
    }

    function addToCartHandler() {
        cartCTX.addToCart({
            key: props.id,
            id: props.id,
            imageurl: props.imageurl,
            name: props.name,
            price: props.price,
            countoncart: props.countoncart
        });

        console.log(cartCTX.itemsOnCart);
    }

    function removeFromCartHandler() {
        cartCTX.removeOneFromCart(props.id);
        console.log(cartCTX.itemsOnCart);
    }

    return (
        <Card>
            <div className={classes.productcontentwrapper}>
                <div className={classes.closeButton}>
                    <Button buttonStyle='remove' text='X' onClick={removeFromGridHandler} />
                </div>
                <div className={classes.productItemContent}>
                    <img src={props.imageurl} alt={`Product: ${props.name}`} />
                    <p className={classes.labeltext}>Product name: </p>
                    <p className={classes.productInfo}>{props.name}</p>
                    <p className={classes.labeltext}>Product price: </p>
                    <p className={classes.productInfo}>{props.price} €</p>
                </div>
                <div className={classes.addToCartButton}>
                    {itemIsAdded ? <div><Button buttonStyle='mark' text='Add one more' onClick={addToCartHandler} /> <Button buttonStyle='remove' text='Remove one' onClick={removeFromCartHandler} />
                    </div> : <Button buttonStyle='mark' text='Add to cart' onClick={addToCartHandler} />}
                </div>
            </div>
        </Card>
    );
}
