
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://64b4f2e1f3dbab5a95c65cb1.mockapi.io';


export const fetchContacts = createAsyncThunk('contacts/fetchAll',
  async (_, {rejectWithValue}) => {
      try {
          const response = await axios.get('/contacts');
          return  response.data;
      } catch (error) {
           return  rejectWithValue(error.message);
      }
  }
)


export const addContact = createAsyncThunk( 'contacts/addContact',
  async (contact, {rejectWithValue}) => {
      try {
          const response = await axios.post('/contacts', contact );
          console.log('added succesfull');
          return  response.data;
      } catch (error) {
        return  rejectWithValue(error.message)
      }
  }
)


export const deleteContact = createAsyncThunk('contacts/deleteContact',
  async (id, thunkAPI) => {
      try {
          const response = await axios.delete(`/contacts/${id}`)
          console.log('Сontact was deleted');
          return  response.data
      } catch (error) {
        return  thunkAPI.rejectWithValue(error.message)
      }
  }
)



// axios.defaults.baseURL='https://64b4f2e1f3dbab5a95c65cb1.mockapi.io/contacts'