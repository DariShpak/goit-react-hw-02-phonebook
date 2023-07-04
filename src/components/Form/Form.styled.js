import styled from "styled-components"

export const ContactForm = styled.form`display: flex;
         flex-direction: column;
         gap: 15px;`


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

export const Button = styled.button`
margin-left:40%;

  width: 95px;
  padding: 4px;
  border-radius: 8px;
  border: 2px solid #d3a625;
  background: #d3a625;
  color: #740001;


      &: focus,
      &: hover {
    border: 2px solid #eeba30;
    background:  #eeba30;
    color:#ae0001;
`