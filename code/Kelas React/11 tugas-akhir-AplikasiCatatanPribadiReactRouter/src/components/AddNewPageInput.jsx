import React from 'react';
import PropTypes from 'prop-types';
import AddNewPageAction from './AddNewPageAction';

class AddNewPageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    }

    onTitleChangeEventHandler = (event) => {
        this.setState(() => {
            return {
                title: event.target.innerHTML,
            }
        });
    }

    onBodyChangeEventHandler = (event) => {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            };
        });
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        if(this.state.title && this.state.body) {
            this.props.addNote(this.state);
        }
    }

    render() {
        return(
            <form className='add-new-page__input' onSubmit={this.onSubmitEventHandler}>
                <div
                    className="add-new-page__input__title"
                    data-placeholder="Catatan rahasia"
                    contentEditable
                    onInput={this.onTitleChangeEventHandler}
                />
                <div
                    className="add-new-page__input__body"
                    data-placeholder="Sebenarnya saya adalah ..."
                    contentEditable
                    onInput={this.onBodyChangeEventHandler}
                />
                <AddNewPageAction />
            </form>
        )
    }
}

AddNewPageInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default AddNewPageInput;