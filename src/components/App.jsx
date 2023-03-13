import React from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./Phonebook/ContactForm";
import { ContactList } from "./ListContacts/ContactList";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";





export class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleSubmit = state => {
    const { name, number } = state

    const user = {
      id: nanoid(),
      name,
      number
    }

    const alreadyContact = this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())

    if (alreadyContact) {
      return alert (`${name} is alredy in phonebook`);
    }

    else {
      this.setState(prevState => {
      return { contacts: [...prevState.contacts, user]};
    });
}
    
}

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }


  componentDidMount (){
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts)

    if (parseContacts){
      this.setState({contacts: parseContacts})
    }
  }

 componentDidUpdate (prevProps, prevState) {
  console.log (this.state.contacts)
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
 }


  

   
  render () {
  const {contacts, filter} = this.state
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  return <> 
  <Section mainTitle={'Phonebook'}>
  <ContactForm onSubmit={ this.handleSubmit }/>
  </Section>
  <Section title={'Contacts'}>
  <Filter value = {filter} onChange={this.changeFilter}/>
  <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
  </Section>
  </>
  
  }
    
};
