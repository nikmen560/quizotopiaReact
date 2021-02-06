import React from "react";
import classes from './HomePage.module.css';
import Modal from "../Modal/Modal";

class HomePage extends React.Component {

    state = {

        showModal: false
    };

    showModal = e => {
        this.setState({
            showModal : !this.state.showModal

        })
        debugger;
    }

    render() {
        return (
            <div className={classes.HomePage}>
                <div>
                    <h1>Home page</h1>
                    <Modal show={this.state.show}/>
                    <button onClick={e => {
                        this.showModal();
                    }}>show modal
                    </button>
                </div>
            </div>
        )
    }
}

export default HomePage;