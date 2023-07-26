import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilterInput = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFormSubmit = data => {
    const enteredName = data.name;
    const normalizedName = enteredName.toLowerCase();
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === normalizedName
      )
    ) {
      return alert(`${enteredName} is already in contacts`);
    }
    const newContact = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleList = this.getVisibleList();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit}></ContactForm>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterInput}></Filter>

        <ContactList
          list={visibleList}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
