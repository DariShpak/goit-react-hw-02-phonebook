import React from "react"
import { DeleteButton, ContactName, ContactNumber, Item } from "./Contact.styled"

import PropTypes from "prop-types"

const Contact = ({name, number, onHandleDelete}) => {
  return (
    <Item>
      <ContactName>
        🪄 {name} :
      </ContactName>
      <ContactNumber>
        {number}
      </ContactNumber>
      <DeleteButton type="button" onClick={onHandleDelete}>Delete</DeleteButton>
    </Item>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
}

export default Contact
