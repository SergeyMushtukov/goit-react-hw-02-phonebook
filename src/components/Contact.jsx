import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={css.item}>
    <div className={css.itemWrapper}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button
        className={css.contactButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
