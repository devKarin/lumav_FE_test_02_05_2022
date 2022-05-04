import { FaGithub, FaHome } from 'react-icons/fa';

import classes from './Header.module.css';

export default function Header() {

    return (
        <div className={classes.headercontent}>
            <a href="https://github.com/devKarin" target="new" className={classes.link}>
                <i className={classes.icon}>
                    <FaGithub />
                </i>
            </a>
            <a href="https://devkarinportfolio.herokuapp.com/" target="new" className={classes.link}>
                <i className={classes.icon}>
                    <FaHome />
                </i>
            </a>
        </div>
    );
}
