import React from "react";
import classes from './Auth.module.css';

class Auth extends React.Component {
    formHandler() {
        
    }
    render() {

        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Autorisation</h1>
                    <form action={this.formHandler()}>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Auth;