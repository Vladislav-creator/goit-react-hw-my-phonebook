import React, { Component } from 'react';
import {Formik} from 'formik'
import { MainForm, AddButton, FormLabel, Input } from './ContactFormStyled';
import { nanoid } from 'nanoid';
// const initialValues = {
//     name: "",
//     number: "",
// }
export class ContactForm extends Component {
    handleSubmit = ({ name, number }, { resetForm }) => {
      const nameInContacts = this.props.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (nameInContacts) {
        alert(`${name} is already in contacts`);
        return;
      }
      const contact = { id: nanoid(), name, number };
      this.props.onSubmit(contact);
      resetForm();
    };
  
    render() {
      return (
        <Formik
          initialValues={{ name: '', number: '' }}
          onSubmit={this.handleSubmit}
        >
          <MainForm autoComplete="off">
            <div>
              <FormLabel htmlFor="name">Name</FormLabel>
              <div>
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </div>
            </div>
            <div>
              <FormLabel htmlFor="number">Number</FormLabel>
              <div>
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </div>
            </div>
            <AddButton type="submit">Add contact</AddButton>
          </MainForm>
        </Formik>
      );
    }
  }
