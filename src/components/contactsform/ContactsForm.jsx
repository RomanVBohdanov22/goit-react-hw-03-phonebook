import PropTypes from 'prop-types';
import '../contactsform/ContactsForm.css';

import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
  }

  clearFormFields = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    this.setState({ name: '', number: '' });

      this.props.onFormSubmit({
        name,
        number,        
      });
        
      

  };
// 
  render() {
    return (
      <form onSubmit={this.clearFormFields} className="contactForm">
        <label htmlFor="name">Name</label>
        <input
          className="ContactInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className="ContactInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
          value={this.state.number}
          required
        />
        <button type="submit" className="ContactBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};