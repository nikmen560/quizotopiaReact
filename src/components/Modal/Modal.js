import React from "react";
import classes from './Modal.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";


class Modal extends React.Component {


    state = {}
    loginHandler = () => {

    }
    registerHandler = () => {

    }


    formHandler(event) {
        event.preventDefault()
    }

    render() {

        return (
            <div>
                {this.props.show ?

                    <h3>modal</h3>

                : null
                }
            </div>
        )
    }
}

export default Modal;