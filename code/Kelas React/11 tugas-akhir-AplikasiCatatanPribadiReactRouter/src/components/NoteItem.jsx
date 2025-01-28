import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';

function NoteItem({ id, title, body, createdAt }) {
    return (
        <div className='note-item'>
            <Link className='note-item__title' to={`/notes/${id}`}>{parser(title)}</Link>
            <div className='note-item__createdAt'>{showFormattedDate(createdAt)}</div>
            <div className='note-item__body'>{parser(body)}</div>
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItem;