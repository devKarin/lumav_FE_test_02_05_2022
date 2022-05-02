import Card from '../ui/Card';

import classes from './ProductCounter.module.css';

export default function ProductCounter() {

    return (
        <Card>
            <p className={classes.counter}>This is my counter</p>
        </Card>
    );
}