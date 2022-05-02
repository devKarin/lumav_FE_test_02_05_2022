import ProductForm from '../products/ProductForm';
import ProductCounter from '../products/ProductCounter';
import ProductGrid from '../products/ProductGrid';
import { products } from '../../assets/products.js';

import classes from './Layout.module.css';

export default function Layout() {

    return (
        <main className={classes.mainlayout}>
            <div className={classes.productformarea}>
                <ProductForm />
            </div>
            <div className={classes.productcounterarea}>
                <ProductCounter />
            </div>
            <div className={classes.productgridarea}>
                <ProductGrid productdata={products} />
            </div>
        </main>
    )
}
