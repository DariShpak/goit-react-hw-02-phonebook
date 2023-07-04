import React, {Component} from "react"
import {ContactForm, Button, Label, Input} from "./Form.styled"
import PropTypes from "prop-types"

class Form extends Component {
  state = {
    name: "",
    number: ""
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
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
      <ContactForm onSubmit={this.onSubmit}>
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
            required
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
