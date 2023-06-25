import { FaGithub, FaHome } from 'react-icons/fa';

import classes from './Header.module.css';

export default function Header() {

    return (
        <div className={classes.headercontent}>
            <h1>AlienShop</h1>
            <div className={classes.icon}>
                <a href="https://github.com/devKarin" target="_blank" className={classes.link}>
                    <i className={classes.github}>
                        <FaGithub />
                    </i>
                </a>
                <a href="https://devkarinportfolio.herokuapp.com/" target="_blank" className={classes.link}>
                    <i className={classes.home}>
                        <FaHome />
                    </i>
                </a>
            </div>
        </div>
    );
}
