
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./ContactItem.module.css";
import { deleteContact } from 'redux/operations';


export function ContactItem({ contactItem }) {
  const {id, name, number} = contactItem;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.ContactItem}>
        {name}: 
        <span>{number}</span>
        <button 
          type="button"
          onClick={handleDelete}
        ><MdClose size={24} /></button>
    </li>
  )
}


ContactItem.propTypes = {
  contactItem: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }).isRequired,
}

