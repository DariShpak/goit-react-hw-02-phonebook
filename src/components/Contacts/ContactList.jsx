import React from "react"
import {List} from "./ContactList.styled"
import PropTypes from "prop-types"
import Contact from "components/Contacts/Contact"

const ContactList = ({ contacts, onHandleDelete }) => {

  return (
    <List>
      {contacts.map(({name, number, id}) =>
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
  onHandleDelete: PropTypes.func.isRequired
}

export default ContactList
