import { useRef } from 'react';

import Card from '../ui/Card';
import Button from '../ui/Button';

import classes from './ProductForm.module.css';

export default function ProductForm() {
    const inputProductImageUrl = useRef();
    const inputProductName = useRef();
    const inputProductPrice = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const newProductImageUrl = inputProductImageUrl.current.value;
        const newProductName = inputProductName.current.value;
        const newProductPrice = inputProductPrice.current.value;

        const newProduct = {
            id: Math.floor(Math.random() * 101),
            imageurl: newProductImageUrl,
            name: newProductName,
            price: newProductPrice,
            countoncart: 0,
            status: "visible",
        };

        console.log(newProduct);
    }

    return (
        <div className={classes.mainformwrapper}>
            <Card>
                <h2>Add product form</h2>
                <form className={classes.addproductform} onSubmit={submitHandler}>
                    <div className={classes.formcontentwrapper}>
                        <label htmlFor='imageurl'>Product image:</label>
                        <input type='file' ref={inputProductImageUrl} />
                        <label htmlFor='name'>Product name:</label>
                        <input type='text' ref={inputProductName} />
                        <label htmlFor='price'>Product price:</label>
                        <input type='number' ref={inputProductPrice} />
                    </div>
                    <Button buttonStyle='submit' text='Submit' onClick={submitHandler} />
                </form>

            </Card>
        </div>
    )
}