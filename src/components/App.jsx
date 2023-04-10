import React, { Component } from 'react'
import { ContactForm } from './ContactsForm/ContactsForm'
import { Filter } from './Filter/Filter'
import { ContactsList } from './ContactsList/ContactsList'
import { nanoid } from 'nanoid'



export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  checkName = name => {
    return this.state.contacts.find(contacts => contacts.name === name)
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };
  
    if (this.checkName(name)) {
      return alert(`${name} is already in contacts`)
    } else
      this.setState(({ contacts }) => (
        {
          contacts: [contact, ...contacts],
        })
      )
  }

  changeFilter = e => { 
    this.setState({filter: e.currentTarget.value})
  } 
   filtredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.includes(filter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }
  
    componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contact: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {this.state.contacts.lenght !== 0 ? (
          <div >
            <h2>Contacts</h2>
            <Filter
              value={this.state.filter}
              onChange={this.changeFilter} />
            <ContactsList
              contacts={this.filtredContacts()} 
              onDeleteContact={this.deleteContact}
            />
          </div>
        ) : (
          <p>Your contacts !!!!!</p>
        )}
      </div>
    );
  }
};
