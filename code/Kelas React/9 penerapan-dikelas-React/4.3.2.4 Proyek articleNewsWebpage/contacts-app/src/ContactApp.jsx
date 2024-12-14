import React from "react";
import ContactList from "./ContactList";
import { getData } from "./data";

function ContactApp() {
    return (
        <div className="container">
            <h1>Daftar Kontak</h1>
            <ContactList {getData}/>
        </div>
    )
}