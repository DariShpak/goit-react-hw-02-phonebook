import React from "react"

import PropTypes from "prop-types"
import {Label, Input} from "./Filter.styled"

const Filter = ({ onHandleSearch }) => {
  
  const onHandleChange = event => {
    const {value} = event.target
    onHandleSearch(value)
  }
  return (
    <Label htmlFor="">
      Search 🔮
      <Input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="enter name"
        onChange={onHandleChange}
      />
    </Label>
  )
}

Filter.propTypes = {
  onHandleSearch: PropTypes.func.isRequired
}

export default Filter
