import React from "react"

const Filter = ({contacts, filter}) => {
  return
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  )
}

export default Filter
