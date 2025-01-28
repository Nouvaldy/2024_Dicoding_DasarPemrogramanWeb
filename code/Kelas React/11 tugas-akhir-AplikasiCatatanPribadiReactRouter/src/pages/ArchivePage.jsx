import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NotesListEmpty from '../components/NotesListEmpty';
import NotesList from '../components/NotesList';
import { getFilteredNotes } from '../utils/local-data';

function ArchivePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKey = searchParams.get('search') || '';

    const onSearchEventHandler = (searchKey) => {
        setSearchParams(searchKey ? { search: searchKey } : {});
    };

    const filteredArchivedNotes = getFilteredNotes(searchKey, true);

    const onResetEventHandler = () => {
        setSearchParams({}); // Hapus query parameter
    };

    return (
        <div>
            <h1>Catatan Arsip</h1>
            <div className='search-bar-container'>
                <SearchBar
                    searchKey={searchKey}
                    onSearch={onSearchEventHandler}
                    onReset={onResetEventHandler}
                />
            </div>
            {filteredArchivedNotes.length === 0 ? (
                <NotesListEmpty />
            ) : (
                <NotesList notes={filteredArchivedNotes} />
            )}
        </div>
    );
}

export default ArchivePage;