import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return (
        <header className={classes.header}>
            <img src="https://th.bing.com/th/id/OIP.5RuWHDPkCpCa6_CKz6jszQHaHa?w=166&h=166&c=7&o=5&dpr=1.4&pid=1.7"
                 alt="header"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}
export default Header;