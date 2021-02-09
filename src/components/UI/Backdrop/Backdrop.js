import React from "react";
import classes from './Backdrop.module.css';

const Backdrop = (props) => {

    // const cls = [
    //     classes.Button,
    //     classes[props.type]
    // ]

    return (
        <div className={classes.Backdrop} onClick={props.onClick} />


    )
}
export default Backdrop;
