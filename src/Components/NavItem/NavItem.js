import React from "react";
import classes from './NavItem.module.css';

const NavItem = props => {

    return (
        <li
            className={classes.NavItem}
            current={props.current}
        >
            <a href={props.href}>{props.value}</a>
        </li>
    )
}

export default NavItem;