import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Contact } from './Contact';

export const ContactList = ({ list, onDeleteContact }) => (
  <ul className={css.list}>
    {list.map(({ id, name, number }) => (
      <Contact
        key={id}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
      ></Contact>
    ))}
  </ul>
);

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
