import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.state.contacts.some(i => i.name === contact.name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };

  handleDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== contactId)
    }));
  };

  handleChangeFilterInput = (event) => {
    this.setState({ filter: event.target.value })
  };

  handleFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <SearchContact value={this.state.filter} handleChangeFilterInput={this.handleChangeFilterInput}/>
        <ContactList
          contacts={this.handleFilterContacts()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
      
    )
  }
}

