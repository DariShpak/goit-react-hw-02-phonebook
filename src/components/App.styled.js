import styled from "styled-components"

export const Container = styled.div`
  min-width: 310px;
  padding: 20px;
`

export const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #740001;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
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
`

export const Button = styled.button`
margin-left:33%;

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

export const Section = styled.section``

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #740001;
`

export const List = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: none;
  gap: 10px;
`

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 10px;
`

export const ContactName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-left:0:
margin:0;
  color: #740001;
`
export const ContactNumber = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #740001;
`
