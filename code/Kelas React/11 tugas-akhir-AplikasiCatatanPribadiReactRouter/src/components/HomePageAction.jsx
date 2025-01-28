import React from 'react';
import { Link } from 'react-router-dom';
import { RiAddLine } from "react-icons/ri";

function HomePageAction() {
    return (
        <div className='homepage__action'>
            <Link className='action' to="/new"><RiAddLine /></Link>
        </div>
    )
}

export default HomePageAction;