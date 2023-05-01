import PropTypes from 'prop-types';
import '../contactlist/ContactList.css';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contactsList">
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => deleteContact(id, name)}>
              Remove contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ).isRequired,
};
