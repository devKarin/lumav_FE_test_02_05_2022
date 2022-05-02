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
                    <p className={classes.productInfo}>{props.price}</p>
                </div>
                <div className={classes.addToCartButton}>
                    <Button buttonStyle='mark' text='Add to cart' onClick={addToCartHandler} />
                </div>
            </div>
        </Card>
    );
}
