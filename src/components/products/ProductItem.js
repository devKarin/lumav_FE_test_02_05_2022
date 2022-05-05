import { useContext } from 'react';

import ShoppingCart from '../../store/shoppingcart';
import Button from '../ui/Button';
import Card from '../ui/Card';

import classes from './ProductItem.module.css';

export default function ProductItem(props) {
    const cartCTX = useContext(ShoppingCart);
    const itemIsAdded = cartCTX.itemIsInCart(props.id);

    function removeFromGridHandler() {
        cartCTX.removeFromCart(props.id);
        cartCTX.removeFromProductList(props.id);
    }

    function addInCartHandler() {
        cartCTX.addInCart({
            key: props.id,
            id: props.id,
            imageurl: props.imageurl,
            name: props.name,
            price: props.price,
            countincart: props.countincart
        });
    }

    function removeFromCartHandler() {
        cartCTX.removeOneFromCart(props.id);
    }

    return (
        <Card>
            <div className={classes.productcontentwrapper}>
                <div className={classes.closeButton}>
                    <Button buttonStyle='remove' text='X' onClick={removeFromGridHandler} />
                </div>
                <div className={classes.productItemContent}>
                    <img src={props.imageurl} alt={`Product: ${props.name}`} />
                    <p className={classes.labeltext}>Product: </p>
                    <p className={classes.productInfo}>{props.name}</p>
                    <p className={classes.labeltext}>Price: </p>
                    <p className={classes.productInfo}>{props.price} space$</p>
                </div>
                <div className={classes.addToCartButton}>
                    {itemIsAdded ? <div><Button buttonStyle='mark' text='Add one more' onClick={addInCartHandler} /> <Button buttonStyle='remove' text='Remove one' onClick={removeFromCartHandler} />
                    </div> : <Button buttonStyle='mark' text='Add to cart' onClick={addInCartHandler} />}
                </div>
            </div>
        </Card>
    );
}
