import * as React from 'react';
import styled from 'styled-components'

interface IFieldProps {
  type: string;
  name: string;
  value: string | number;
  handleOnChange: (e: React.ChangeEvent) => void;
  placeholder?: string;
  label: string;
  error?: any;
}

const Field = ({type, name, value, handleOnChange, placeholder, label, error}: IFieldProps) => {

  const ErrorMessage = styled.p`
    color: red;
  `

  return(
    <div className='field'>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleOnChange} placeholder={placeholder}/>
      {typeof error === 'string' ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  );
}

export default Field;
