import PropTypes from 'prop-types';
import '../filter/Filter.css';

const FilterContacts = ({ filter, onSearchContact }) => {
    return (
    <label htmlFor="search"><span className='pseudo'>Search contact by name <br/></span>
    <input
      className="searchInput"
      type="text"
      name="search"
      value={filter}
      onChange={onSearchContact}
    /></label>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};
