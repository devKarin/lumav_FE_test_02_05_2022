import classes from './ProductItem.module.css';

export default function ProductItem() {

    return (
        <div className={classes.productitemwrapper}>
            <p>Image <span>X-Button to remove item from grid</span></p>
            <p>Product name</p>
            <p>Product price</p>
            <p>button to add to cart</p>
        </div>
    );
}