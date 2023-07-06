import React from "react"

import PropTypes from "prop-types"
import {Label, Input} from "./Filter.styled"

const Filter = ({ filter, onHandleSearch }) => {
  
  return (
    <Label htmlFor="">
      Search 🔮
      <Input
        type="text"
        name="name"
        value={filter}
        autoComplete="off"
        placeholder="enter name"
        onChange={onHandleSearch}
      />
    </Label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleSearch: PropTypes.func.isRequired
}

export default Filter
