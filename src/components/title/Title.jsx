import PropTypes from 'prop-types';
import '../title/Title.css';

const Title = ({ title }) => {
    if (title==='Phonebook') return (<h1 className='titlerowh1'>{title}</h1>);
    return (<h2 className='titlerowh2'>{title}</h2>);
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};