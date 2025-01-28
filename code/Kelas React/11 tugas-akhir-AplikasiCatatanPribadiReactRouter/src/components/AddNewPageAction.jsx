import React from 'react';
import { RiCheckLine } from "react-icons/ri";

function AddNewPageAction() {
    return (
        <div className='add-new-page__action'>
            <button className='action' type="submit"><RiCheckLine /></button>
        </div>
    )
}

export default AddNewPageAction;