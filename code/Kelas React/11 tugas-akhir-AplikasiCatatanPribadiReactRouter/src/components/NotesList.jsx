import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../components/NoteItem';

function NotesList({ notes }) {
    return(
        <div className='notes-list'>
            {notes.map((note) => (
                <NoteItem {...note} key={note.id} />
                ))
            }
        </div>
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    })),
};

export default NotesList;