import React, {Component} from "react"
import Form from "components/Form/Form"
import ContactList from "./Contacts/ContactList"
import Filter from "./Filter/Filter"
import {nanoid} from "nanoid"

import {Container, MainTitle, SectionTitle} from "./App.styled"

class App extends Component {
  state = {
    contacts: [
      {id: "id-1", name: "Hermione Granger", number: "459-12-56"},
      {id: "id-2", name: "Ron Weasley", number: "443-89-12"},
      {id: "id-3", name: "Albus Dumbledore", number: "645-17-79"},
      {id: "id-4", name: "Harry Potter ", number: "227-91-26"}
    ],
    filter: "",
  }

  handleFormSubmit = ({name, number}) => {
    const contactId = nanoid(3)

    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: contactId,
          name: name,
          number: number
        }
      ]
    })
  }

  handleSearch = event => {
    event.preventDefault()
    const searchName = event.target.value.toLowerCase()
    this.setState(() => ({
      filter: searchName
    }))
  }

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={this.handleFormSubmit} />

        <SectionTitle>Contacts</SectionTitle>
        <Filter contact={this.state.contacts} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          onHandleSearch={this.handleSearch}
          onHandleDelete={this.handleDelete}
        />
      </Container>
    )
  }
}

export default App

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>
