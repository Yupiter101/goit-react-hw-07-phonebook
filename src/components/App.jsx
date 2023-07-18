

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

import {ContactForm} from "./ContactForm/ContactForm";
import {Filter} from "./Filter/Filter";
import {ContactList} from "./ContactList/ContactList";



export function App() {

  const isError = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchContacts()) 
  }, [dispatch])



  if(isError) {
    return (
      <>
        <h1>Error. Sorry, something went wrong</h1>
      </>
    )
  }

  return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2 style={{color: isLoading ? 'blue' : 'black'}}>
          {isLoading ? 'Loading. . . . .' : 'Contacts'}</h2>
        <Filter />
        <ContactList />  
      </div>
  )
}
