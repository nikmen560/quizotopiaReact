import React from "react";
import classes from './QuizCreate.module.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../Modal/Modal";

class QuizCreate extends React.Component {

    state = {
        isForm: true,
        show: true,
        header: 'create quiz',
        inputs: [
            {
                type: 'text',
                placeholder: 'question',
                required: true,
            },
            {
                type: 'text',
                placeholder: 'answer',
                required: true,
            },
            {
                type: 'text',
                placeholder: 'answer',
                required: true,
            },
            {
                type: 'text',
                placeholder: 'answer',
                required: true,
            },

        ],
        buttons: [
            {
                type: 'submit',
                name:'create',
                disabled: 'false',
                onClick: this.onCreateQuiz
            }
        ]

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

    showModal = () => {
        this.setState(prev =>({
            show: !prev.show
        }))
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


    render() {
        return (
            <Modal
                isForm={this.state.form}
            show={this.state.show}
            onClose={this.showModal}
            renderButtons={this.renderButtons}
            modalHeader={this.state.header}
            >
                <form onSubmit={this.formHandler} className={classes.QuizCreateForm}>
                    <div>
                        {this.renderInputs()}
                        <select>
                            <option value="1">1</option>
                        </select>
                    </div>
                </form>
            </Modal>
        )
    }
}

export default QuizCreate;