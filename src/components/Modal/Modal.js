import React from "react";
import classes from './Modal.module.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";


class Modal extends React.Component {

    render() {

        if (this.props.show) {
            return (
                <div className={classes.ModalOverlay}>
                    <div className={classes.ModalContent}>
                          <span
                              className={classes.close}
                              onClick={this.props.onClose}
                          ><i className="fa fa-times" /></span>
                        <div className={classes.ModalHeader}>
                            {this.props.onCLose}
                            {this.props.modalHeader}
                        </div>
                        <div className={classes.ModalBody}>
                            {this.props.children}
                        </div>
                        <div className={classes.ModalFooter}>
                            {this.props.renderButtons()}
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