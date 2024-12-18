import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: JSON.parse(localStorage.getItem('contacts')) || getData(), // Load from Local Storage
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactEventHandler = this.onAddContactEventHandler.bind(this);
    }

    //Event handler delete
    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts }, () => {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts)); // Update Local Storage
        });
    }

    //Event handler addContact
    onAddContactEventHandler({ name, tag }) {
        this.setState((prevState) => {
            const updatedContacts = [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name: name,
                        tag,
                        imageUrl: '/images/default.jpg',
                    }
                ];
            localStorage.setItem('contacts', JSON.stringify(updatedContacts)); //Update Local Storage
            return { contacts: updatedContacts };
        });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactEventHandler} />
                <h2>Daftar Kontak</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default ContactApp;