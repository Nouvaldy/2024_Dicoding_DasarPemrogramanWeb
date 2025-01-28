import React from 'react';
import { useParams } from 'react-router-dom';
import NotesListEmpty from '../components/NotesListEmpty';
import DetailPageAction from '../components/DetailPageAction';
import { showFormattedDate } from '../utils';
import { getNote } from '../utils/local-data';
import parser from 'html-react-parser';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <NotesListEmpty />;
  }

  return (
    <div className='detail-page'>
        <div className='detail-page__title'>{parser(note.title)}</div>
        <div className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</div>
        <div className='detail-page__body'>{parser(note.body)}</div>
        <DetailPageAction />
    </div>
  );
}

export default DetailPage;