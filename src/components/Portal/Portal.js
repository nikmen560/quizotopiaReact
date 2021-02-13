import React from "react";
import classes from './Content.module.css';

const Content = (props) => {
    return (
        <main className={classes.Content}>
            {props.children}
        </main>
    )
}
export default Content;