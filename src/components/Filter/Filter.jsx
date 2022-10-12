import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { contacts, filter, handleInput } = this.props;
    return (
      <>
        <label>
          Find contacts by name
          <input
            onChange={handleInput}
            value={filter}
            type="text"
            name="filter"
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
