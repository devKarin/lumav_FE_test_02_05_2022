import classes from './Layout.module.css';

import ProductForm from '../products/ProductForm';
import ProductCounter from '../products/ProductCounter';
import ProductGrid from '../products/ProductGrid';

export default function Layout() {

    return (
        <>
            <main>This is my main layout
                <ProductForm />
                <ProductCounter />
                <ProductGrid />
            </main>
        </>
    )
}