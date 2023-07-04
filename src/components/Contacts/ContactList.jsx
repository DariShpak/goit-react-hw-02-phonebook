import React from "react"
import {List} from "./ContactList.styled"
import PropTypes from "prop-types"
import Contact from "components/Contacts/Contact"

const ContactList = ({contacts, filter, onHandleDelete}) => {
  return (
    <List>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(({name, number, id}) =>
          <Contact
            key={id}
            name={name}
            number={number}
            onHandleDelete={() => onHandleDelete(id)}
          />
        )}
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onHandleDelete: PropTypes.func.isRequired
}

export default ContactList
