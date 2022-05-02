import classes from './Button.module.css';

export default function Button(props) {
    let style;
    switch (props.buttonStyle) {
        case 'submit':
            style = `${classes.submit}`;
            break;
        case 'remove':
            style = `${classes.remove}`;
            break;
        case 'mark':
            style = `${classes.mark}`;
            break;
        default:
            style = `${classes.usual}`;
    }

    return <button className={props.buttonStyle ? `${classes.button} ${style}` : `${classes.button} ${classes.usual}`} onClick={props.onClick}>{props.text}</button>
}
