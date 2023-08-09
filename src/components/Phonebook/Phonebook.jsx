import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Form, Label, Input, SubmitButton } from './PhonebookStyled';
import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    name: ``,
    id: null,
    number: '',
  };
  onInputsChange = e => {
    this.setState({
      [e.target.name]: e.currentTarget.value,
      id: nanoid(),
    });
  };

  reset = e => {
    this.props.contactAdd(e, this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.reset}>
        <Label>Name</Label>
        <Input
          onChange={this.onInputsChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          onChange={this.onInputsChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitButton
          type="submit"
          disabled={!this.state.name || !this.state.number}
          onClick={this.reset}
        >
          Add contact
        </SubmitButton>
      </Form>
    );
  }
}
