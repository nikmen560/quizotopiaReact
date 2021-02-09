import React from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button/Button";
import Auth from "../Auth/Auth";

class HomePage extends React.Component {


    render() {
        return (
            <div className={classes.HomePage}>
                <div>
                    <h1>Home page</h1>
                    <h3>to continue you should sign in</h3>
                    <Button
                        onClick={Auth}
                        name={'SignIn'}
                        show={true}
                    />

                </div>
            </div>
        )
    }
}

export default HomePage;