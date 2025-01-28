import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageAction from './HomePageAction';
import AddNewPageAction from './AddNewPageAction';
import DetailPageAction from './DetailPageAction';

function Action() {
    return (
            <Routes>
                <Route path="/" element={<HomePageAction />} />
                <Route path="/new" element={<AddNewPageAction />} />
                <Route path="/notes/:id" element={<DetailPageAction />} />
            </Routes>
    )
}

export default Action;