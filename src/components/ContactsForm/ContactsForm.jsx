import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export  class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <label> Name</label>
        <input
        style={{
          fontSize: 40,
          color: '#010101'
        }}
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label> Number</label>
        <input
          style={{
          fontSize: 40,
          color: '#010101'
        }}
          type="tel"
          name="number"
          id={this.numberInputId}
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit"
          style={{
          fontSize: 40,
          color: '#010101'
        }}>
          Add contact
        </button>
      </form>
    );
  }
}