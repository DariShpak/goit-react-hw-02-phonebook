import React from "react"
import {ContactName, ContactNumber, Item, DeleteButton} from "./Contact.styled"
import PropTypes from "prop-types"

const Contact = ({name, number, onClick}) => {
  return (
    <Item>
      <ContactName>
        🪄 {name} :
      </ContactName>
      <ContactNumber>
        {number}
      </ContactNumber>
      <DeleteButton type="button" onClick={onClick}>
        Delete
      </DeleteButton>
    </Item>
  )
}
Contact.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
}

export default Contact
