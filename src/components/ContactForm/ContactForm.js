import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { addContact, getContacts } from "redux/contactSlice";
import css from "./ContactForm.module.css";



export function ContactForm() {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
  
    let isSameName = contacts.some(cont => cont.name === name.value);
    if(isSameName || !name.value.trim()) {
      alert(`${name.value} is already in contacs`);
      console.log(`${name.value} is already in contacs`);
      isSameName = false;
      return;
    }

    const newConntact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    }

    dispatch(addContact(newConntact));
    event.target.reset();

  }



  return (
      <form onSubmit={handleSubmit} className={css.FormContact}>
          <label className={css.LabelContact}> Name
            <input
              className={css.InputContact}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
          </label>
         
          <label className={css.LabelContact}>Number
            <input
              className={css.InputContact}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={css.BtnContact} type="submit">Add contact</button>
        </form>
  )
  
}
