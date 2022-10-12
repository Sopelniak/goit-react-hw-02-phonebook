import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map(contact => (
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
  contacts: PropTypes.array.isRequired,
};
