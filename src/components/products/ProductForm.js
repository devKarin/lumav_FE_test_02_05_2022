import Card from '../ui/Card';

import classes from './ProductForm.module.css';

export default function ProductForm() {

    function submitHandler(event) {
        event.preventDefault();

        // TODO: const formData
    }

    return (
        <div className={classes.mainformwrapper}>
            <Card>
                This is my productform
            </Card>
        </div>
    )
}