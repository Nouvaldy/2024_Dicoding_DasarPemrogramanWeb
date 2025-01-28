import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiInboxUnarchiveLine, RiInboxArchiveLine, RiDeleteBin7Line } from "react-icons/ri";
import { unarchiveNote, archiveNote, deleteNote, getNote } from '../utils/local-data';

function DetailPageAction() {
    const { id } = useParams();
    const note = getNote(id);
    const navigate = useNavigate();

    const handleUnarchive = () => {
        unarchiveNote(id);
        toast.info('Catatan berhasil di-unarchive', {
      position: 'bottom-left',
    });
        navigate('/');
    };

    const handleArchive = () => {
        archiveNote(id);
        toast.info('Catatan berhasil di-archive', {
            position: 'bottom-left',
        });
        navigate('/');
    };

    const handleDelete = () => {
        deleteNote(id);
        toast.error('Catatan berhasil dihapus', {
            position: 'bottom-left',
        });
        navigate('/');
    };

    return (
        <div className='detail-page__action'>
            { note.archived ?
                <button className='action' title='unarchive' onClick={handleUnarchive}><RiInboxUnarchiveLine /></button> :
                <button className='action' title='archive' onClick={handleArchive}><RiInboxArchiveLine /></button>
            }
            <button className='action' title='delete' onClick={handleDelete}><RiDeleteBin7Line /></button>
        </div>
    );
}

export default DetailPageAction;