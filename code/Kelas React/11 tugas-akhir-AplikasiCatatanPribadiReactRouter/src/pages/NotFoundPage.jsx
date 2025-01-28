import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className='not-found-page'>
            <h1>404 - Page Not Found</h1>
            <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
            <Link to="/">Kembali ke Beranda</Link>
        </div>
    );
}

export default NotFoundPage;