import { useRef, useContext } from 'react';

import ShoppingCart from '../../store/shoppingcart';
import Card from '../ui/Card';
import Button from '../ui/Button';

import classes from './ProductForm.module.css';

export default function ProductForm() {
    const cartCTX = useContext(ShoppingCart);
    const inputProductImageUrl = useRef();
    const inputProductName = useRef();
    const inputProductPrice = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        const newProductImageUrl = inputProductImageUrl.current.value;
        const newProductName = inputProductName.current.value;
        const newProductPrice = inputProductPrice.current.value;
        const product = {
            id: Math.floor(Math.random() * 500001) + Date.now(),
            imageurl: newProductImageUrl,
            name: newProductName,
            price: newProductPrice,
            countincart: 0
        };

        cartCTX.addOnProductsList(product);

        // Empty input fields
        inputProductImageUrl.current.value = '';
        inputProductName.current.value = ''
        inputProductPrice.current.value = '';
    }

    return (
        <div className={classes.mainformwrapper}>
            <Card>
                <h2>Add product form</h2>
                <form className={classes.addproductform} onSubmit={submitHandler}>
                    <div className={classes.formcontentwrapper}>
                        <label htmlFor='imageurl'>Product image url:</label>
                        <input id='imageurl' name='imageurl' type='url' required ref={inputProductImageUrl} />
                        <label htmlFor='name'>Product name:</label>
                        <input id='name' name='name' type='text' required ref={inputProductName} />
                        <label htmlFor='price'>Product price:</label>
                        <input id='price' name='price' type='number' required ref={inputProductPrice} />
                    </div>
                    <Button buttonStyle='submit' text='Submit' />
                </form>
            </Card>
        </div>
    )
}
