import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    const { contacts, filterContacts, handleClickDelete } = this.props;
    return (
      <>
        <ul>
          {filterContacts(contacts).map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button id={contact.id} onClick={handleClickDelete} type="button">
                Delete
              </button>
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
