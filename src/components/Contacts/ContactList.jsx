import React from "react"
import Contact from "./Contact"
import {Label, Input, Section, List} from "./ContactList.styled"
import PropTypes from "prop-types"

const ContactList = ({ contacts, onHandleSearch, onHandleDelete }) => {
  return <Section>
      <Label htmlFor="">
        Search 🔮
        <Input type="search" name="name" autoComplete="off" value={contacts.name} placeholder="enter name" onChange={onHandleSearch} />
      </Label>
    <List>
      
      {contacts.map(({ name, number, id }) =>
        <Contact
          key={id}
          name={name}
          number={number}
          onClick={() => onHandleDelete(id)}
        />
      )}

      </List>
    </Section>
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })).isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired
}

export default ContactList
