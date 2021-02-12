import React from "react";
import classes from './Auth.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";


class Auth extends React.Component {

    state = {
        show: this.props.show,
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
    renderButtons = () => {
        return this.state.buttons.map((btn, index) => {
            return (
                <Button
                    key={index}
                    type={btn.type}
                    name={btn.name}
                    disabled={btn.disabled}
                    onClick={btn.onClick}
                />
            )
        })
    }
    renderInputs = () => {
        return this.state.inputs.map((input, index) => {
            return (
                <Input
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                />
            )
        })
    }

    formHandler(event) {
        event.preventDefault()
    }

    registerHandler() {
    }

    loginHandler() {

    }
    onClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        if(!this.state.show) {
            return null;
        }
        return (
            <div className={classes.AuthOverlay}>
                <div className={classes.Auth}>
                    <span
                        className={classes.close + ' fa fa-times '}
                        onClick={this.onClose.bind(this)}
                    ></span>
                    <div className={classes.AuthHeader}>
                        <h2>Auth</h2>

                    </div>
                    <form onSubmit={this.formHandler}>
                        <div className={classes.AuthBody}>
                            {this.renderInputs()}
                        </div>
                        <div className={classes.AuthFooter}>
                            {this.renderButtons()}
                        </div>

                    </form>
                </div>
            </div>


        )
    }
}

export default Auth;