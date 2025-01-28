import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilteredNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesListEmpty from '../components/NotesListEmpty';
import NotesList from '../components/NotesList';
import HomePageAction from '../components/HomePageAction';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKey = searchParams.get('search') || '';

    const onSearchEventHandler = (searchKey) => {
        setSearchParams(searchKey ? { search: searchKey } : {});
    };

    const filteredNotes = getFilteredNotes(searchKey, false);

    const onResetEventHandler = () => {
        setSearchParams({});
    };

    return (
        <div>
            <h1>Catatan Aktif</h1>
            <div className='search-bar-container'>
                <SearchBar
                    searchKey={searchKey}
                    onSearch={onSearchEventHandler}
                    onReset={onResetEventHandler}
                />
            </div>
            {filteredNotes.length === 0 ? (
                <NotesListEmpty />
            ) : (
                <NotesList notes={filteredNotes} />
            )}
            <HomePageAction />
        </div>
    );
}

export default HomePage;