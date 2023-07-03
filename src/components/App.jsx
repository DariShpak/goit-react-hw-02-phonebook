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
  ContactNumber
} from "./App.styled"

class App extends Component {
  state = {
    contacts: [],
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
            <Input type="text" placeholder="enter name"/>
          </Label>
          <List>
            {this.state.contacts.map(({name, number, id}) => {
              console.log(this.state.contacts)
              return (
                <Item key={id}>
                  <ContactName>
                    🪄 {name} :
                  </ContactName>
                  <ContactNumber>
                    {number}
                  </ContactNumber>
                  <Button type="button">Delete</Button>
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
