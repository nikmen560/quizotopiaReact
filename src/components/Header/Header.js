import React from "react";
import classes from './Header.module.css';
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = (props) => {
    return (
        <header className={classes.Header}>
           <NavigationBar />
        </header>
    )
}
export default Header;