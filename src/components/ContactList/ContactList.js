
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contactSlice";
import { getFilter } from "redux/filterSlice";
import css from "./ContactList.module.css";


const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(({name}) => name.toUpperCase().includes(filter.toUpperCase()));
};


export function ContactList () {
 
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return(
    <ul className={css.ContactList}>
      {visibleContacts.map(contact=> {
        return <ContactItem key={contact.id} contactItem={contact}/>
      })}
    </ul>
  )
}
