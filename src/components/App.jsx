import React, {Component} from "react"
import {nanoid} from "nanoid"
import {
  Container,
  MainTitle,
  Form,
  Label,
  Input,
  Button,
  Section,
  SectionTitle,
  List,
  Item,
  ContactName,
  ContactNumber,
  DeleteButton
} from "./App.styled"

class App extends Component {
  state = {
    contacts: [
      {id: "id-1", name: "Hermione Granger", number: "459-12-56"},
      {id: "id-2", name: "Ron Weasley", number: "443-89-12"},
      {id: "id-3", name: "Albus Dumbledore", number: "645-17-79"},
      {id: "id-4", name: "Harry Potter ", number: "227-91-26"}
    ],
    filter: "",
    name: "",
    number: ""
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  addContact = event => {
    event.preventDefault()
    const contactId = nanoid(3)
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: contactId,
          name: this.state.name,
          number: this.state.number
        }
      ]
    })
    this.reset()
  }

  reset = () => {
    this.setState({
      name: "",
      number: ""
    })
  }

  handleSearch = event => {
    event.preventDefault()
    const searchName = event.target.value.toLowerCase()
    this.setState(prevState => ({
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
        <Form onSubmit={this.addContact}>
          <Label htmlFor="">
            Name ⚡
            <Input
              type="text"
              value={this.state.name}
              name="name"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </Label>
          <Label htmlFor="">
            Number ⚡
            <Input
              type="tel"
              value={this.state.number}
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>

        <Section>
          <SectionTitle>Contacts</SectionTitle>
          <Label htmlFor="">
            Search 🔮
            <Input
              type="search"
              name="name"
              autoComplete="off"
              value={this.state.contacts.name}
              placeholder="enter name"
              onChange={this.handleSearch}
            />
          </Label>
          <List>
            {this.state.contacts.filter(contact =>
              contact.name.toLowerCase().includes(this.state.filter)
            ).map(({name, number, id}) => {
              return (
                <Item key={id}>
                  <ContactName>
                    🪄 {name} :
                  </ContactName>
                  <ContactNumber>
                    {number}
                  </ContactNumber>
                  <DeleteButton
                    type="button"
                    onClick={() => this.handleDelete(id)}
                  >
                    Delete
                  </DeleteButton>
                </Item>
              )
            })}
          </List>
        </Section>
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