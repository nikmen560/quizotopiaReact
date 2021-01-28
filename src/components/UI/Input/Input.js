import React from "react";
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.Input}>
                <input
                    type={props.type}
                    value={props.value}
                    required={props.required}
                    placeholder={props.placeholder}
                />
        </div>
    )
}
export default Input;
