import React from "react";
import classes from './Auth.module.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const inputs = [
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
]

class Auth extends React.Component {

    renderInput = () => {
        return inputs.map((input, index) => {
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

    render() {

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>
                    <form onSubmit={this.formHandler} className={classes.AuthForm}>

                        <div>
                            {this.renderInput()}
                        </div>
                        <Button
                            type={'submit'}
                            name={'register'}
                            disabled={true}
                        />
                        <Button
                            type={'submit'}
                            name={'login'}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;