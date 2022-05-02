import classes from './ProductForm.module.css';

export default function ProductForm() {

    function submitHandler(event) {
        event.preventDefault();

        // TODO: const formData
    }

    return (
        <div className={classes.mainformwrapper}>
            This is my productform
        </div>
    )
}