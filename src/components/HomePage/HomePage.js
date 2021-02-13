import React from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button/Button";
import Auth from "../Auth/Auth";
import Modal from "../Modal/Modal";

class HomePage extends React.Component {


    state = {
        show: false,
    }
    showAuth = () => {
        this.setState(prev => ({
            show: !prev.show
        }));
    }

    render() {
        return (
            <div className={classes.HomePage}>
                <div>
                    <h1>Home page</h1>
                    <h3>to continue you should sign in</h3>
                    <Button
                        onClick={this.showAuth.bind(this)}
                        name={'SignIn'}
                    />

                    <Auth
                        show={this.state.show}
                        onClose={this.showAuth}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;