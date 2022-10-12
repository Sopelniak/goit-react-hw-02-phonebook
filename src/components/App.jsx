import { nanoid } from 'nanoid';
import { Component } from 'react';
import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    const { name, number } = e.target.elements;
    e.preventDefault();
    this.addContact(name.value, number.value);
    this.reset();
  };

  reset = () => {
    this.setState(() => {
      return { name: '', number: '' };
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm
            name={name}
            number={number}
            handleInput={this.handleInput}
            onSubmit={this.onSubmit}
          />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter
              contacts={contacts}
              filter={filter}
              handleInput={this.handleInput}
            />
            <Contacts contacts={contacts} />
          </Section>
        )}
      </>
    );
  }
}

export { App };
