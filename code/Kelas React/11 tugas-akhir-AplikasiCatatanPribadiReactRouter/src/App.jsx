import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddNewPage from './pages/AddNewPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='app-container'>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<HomePage />} />
              <Route path="archives" element={<ArchivePage />} />
              <Route path="new" element={<AddNewPage />} />
              <Route path="notes/:id" element={<DetailPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        <ToastContainer />
      </div>
  );
}

export default App;