import React from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button/Button";
import Auth from "../Auth/Auth";

class HomePage extends React.Component {


    state = {
        show: false,
    }
    showAuth = () => {
        this.setState({
            show: !this.state.show
        })
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
                    {this.state.show ?
                    <Auth
                        show={this.state.show}
                    /> :
                        null
                    }

                </div>
            </div>
        )
    }
}

export default HomePage;