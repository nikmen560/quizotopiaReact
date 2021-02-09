import React from "react";
import classes from './Auth.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";


class Auth extends React.Component {

    state = {
        header: 'auth',
        inputs: [
            {
                type: 'email',
                placeholder: 'Email',
                required: true,
            },
            {
                type: 'password',
                placeholder: 'Password',
                required: true,
            },
        ],
        buttons: [
            {
                type: 'submit',
                name: 'register',
                disabled: false,
                onClick: this.registerHandler
            },
            {
                type: 'submit',
                name: 'login',
                disabled: false,
                onClick: this.loginHandler
            },
        ]
    }





    formHandler(event) {
        event.preventDefault()
    }

    registerHandler() {
    }

    loginHandler() {

    }

    render() {

        return (
            <form onSubmit={this.formHandler}>
            <Modal
                modalHeader={'Auth'}
                show={this.props.show}
                inputs={this.props.inputs}
                buttons = {this.state.buttons}
            >

                    {/*{this.renderInput()}*/}



            </Modal>
            </form>
        )
    }
}

export default Auth;