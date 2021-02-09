import React from "react";
import classes from './QuizCreate.module.css';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../Modal/Modal";

class QuizCreate extends React.Component {

    state = {
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

    render() {
        return (
            <Modal>
                <h1>Create question</h1>
                <form onSubmit={this.formHandler} className={classes.QuizCreateForm}>

                    <div>

                        <select>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <Button
                        type={'submit'}
                        name={'register'}
                        disabled={true}
                        // onClick={this.registerHandler}
                    />
                    <Button
                        type={'submit'}
                        name={'login'}
                        disabled={true}
                        // onClick={this.loginHandler()}
                    />
                </form>
            </Modal>
        )
    }
}

export default QuizCreate;