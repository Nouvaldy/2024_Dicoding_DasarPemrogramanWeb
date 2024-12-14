import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {
            contacts.map((contact) => (
                <ContactItem {...contact} key={contact.id} />
            ))}
        </div>
    );
}

export default ContactList;