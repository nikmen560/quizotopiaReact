import React from "react";
import classes from './Modal.module.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";


class Modal extends React.Component {

onClose = () => {

}
    render() {

        if (this.props.show) {
            return (
                <div className={classes.ModalOverlay}>
                    <div className={classes.ModalContent}>
                        <div className={classes.ModalHeader}>
                            {this.props.modalHeader}
                        </div>
                        <div className={classes.ModalBody}>
                            {this.props.children}
                            {this.props.renderInputs()}
                        </div>
                        <div className={classes.ModalFooter}>
                            {this.renderButtons()}
                        </div>
                    </div>

                </div>
            )
        } else {
            return null;
        }

    }
}

export default Modal;