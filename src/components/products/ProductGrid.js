import ProductItem from './ProductItem';
import Card from '../ui/Card';

import classes from './ProductGrid.module.css';

export default function ProductGrid(props) {

    return (<div>
        {props.productList.length > 0 ? <ul className={classes.mainproductlist}>
            {props.productList.map((product) =>
                <ProductItem
                    key={product.id}
                    id={product.id}
                    imageurl={product.imageurl}
                    name={product.name}
                    price={product.price}
                    countoncart={product.countoncart}
                />
            )} </ul> : <div className={classes.emptyList}><Card>No products on the list yet</Card></div>}

    </div>
    );
}
