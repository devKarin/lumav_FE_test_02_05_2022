import Button from '../ui/Button';
import Card from '../ui/Card';

import classes from './ProductItem.module.css';

export default function ProductItem(props) {

    function removeFromGridHandler() {
        console.log(`Button id: ${props.id} clicked X`);
    }

    function addToCartHandler() {
        console.log(`${props.name} added to cart`);
    }

    return (
        <div className={classes.productitemwrapper}>
            <Card>
                <Button buttonStyle='remove' text='X' onClick={removeFromGridHandler} />
                <p>Image <span>X-Button to remove item from grid</span></p>
                <p>Product name: {props.name}</p>
                <p>Product price: {props.price}</p>
                <p>button to add to cart</p>
                <Button buttonStyle='mark' text='Add to cart' onClick={addToCartHandler} />
            </Card>
        </div>
    );
}
