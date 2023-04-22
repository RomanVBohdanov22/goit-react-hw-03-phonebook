import React, { Component } from 'react';
import Notiflix from 'notiflix';
import ContactForm from './contactsform';
import ContactList from './contactlist';
import { nanoid } from 'nanoid';
import FilterContacts from './filter';
import Title from './title';
function getRandomHexColor() {
  return `#${Math.floor((0.2+0.5*Math.random()) * 16777215).toString(16)}`;
}

const appStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  gap: '12px',
  color: '#010101',
};
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // methods
  onFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (this.state.contacts.some(contact => contact.name === name || contact.number === number))
    {       
      Notiflix.Notify.failure('This contact is already exists');
      return;
      }  
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    Notiflix.Notify.success(`Succesfully added ${name} to your contacts`);
  };

  onSearchContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notiflix.Notify.info(`Succesfully removed ${name} from your contacts`);
  };


  render() {
    const { contacts, filter } = this.state;
    const {onFormSubmit, onSearchContact, deleteContact} = this;
    return (
      <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
        <div>
          <Title title={'Phonebook'} />
          <ContactForm onFormSubmit={onFormSubmit} contacts={contacts} />
          <Title title={'Contacts'} />
          <FilterContacts
            filter={filter}
            onSearchContact={onSearchContact}
          />
          <ContactList
            contacts={contacts}
            deleteContact={deleteContact}
            filter={filter}
          />
        </div>
      </div>
    );
  }
}
