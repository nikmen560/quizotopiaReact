import React from "react";
import classes from './NavItem.module.css';
import {NavLink} from "react-router-dom";

const NavItem = props => {

    return (
        <li className={classes.NavItem}>
            <NavLink
                to={props.href}
                exact={props.exact}
                activeClassName={classes.active}
            >
                {props.value}
            </NavLink>
        </li>
    )
}

export default NavItem;