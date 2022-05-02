import ProductItem from './ProductItem';
import Card from '../ui/Card';

import classes from './ProductGrid.module.css';

export default function ProductGrid(props) {

    return (
        <ul className={classes.mainproductlist}>
            {props.productdata.map((product, key) =>
                <ProductItem
                    key={key}
                    id={product.id}
                    imageurl={product.image}
                    name={product.name}
                    price={product.price}
                    countoncart={product.countoncart}
                    status={product.status}
                />
            )}
            <ProductItem />
        </ul>
    );
}
