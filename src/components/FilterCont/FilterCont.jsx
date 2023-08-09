import React, { Component } from 'react';
import { Input, Label } from '../Phonebook/PhonebookStyled';
import PropTypes from 'prop-types';
export default class FilterCont extends Component {
  render() {
    return (
      <div>
        <Label>Find contacts by name</Label>
        <Input onChange={this.props.filterCont} type="text" name="filter" />
      </div>
    );
  }
}
FilterCont.propTypes = {
  filterCont: PropTypes.func.isRequired,
};
