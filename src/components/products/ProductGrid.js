import classes from './ProductGrid.module.css';
import ProductItem from './ProductItem';

export default function ProductGrid() {

    return (
        <div className={classes.maingridwrapper}>
            This is my productgrid
            <ProductItem />
            <ProductItem />
        </div>
    );
}