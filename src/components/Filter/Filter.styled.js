import styled from "styled-components"


export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  color: #740001;
  align-items: center;
  width: 250px;
`

export const Input = styled.input`
  background: transparent;
  border: 2px solid #d3a625;
  border-radius: 8px;
  padding: 4px;
  color: #740001;

  &: focus,
  &: hover,
  &: active {
    border: 2px solid #eeba30;
    background: transparent;
    outline: transparent;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`
