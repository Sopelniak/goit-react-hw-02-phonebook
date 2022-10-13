import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    const { contacts, filterContacts } = this.props;
    return (
      <>
        <ul>
          {filterContacts(contacts).map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Contacts.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
