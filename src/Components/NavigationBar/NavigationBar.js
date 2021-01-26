import React from "react";
import classes from './NavigationBar.module.css';
import NavItem from "../NavItem/NavItem";

const NavigationBar = props => {
    return (
        <nav className={classes.NavigationBar}>
            <ul>
              <NavItem>niga </NavItem>
            </ul>
        </nav>

    )
}

export default NavigationBar;



