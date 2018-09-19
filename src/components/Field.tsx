import * as React from 'react';

interface IFieldProps {
  type: string;
  name: string;
  value: string | number;
  handleOnChange: (e: React.ChangeEvent) => void;
  placeholder?: string;
  label: string;
}

const Field = ({type, name, value, handleOnChange, placeholder, label}: IFieldProps) => {
  return(
    <div className='field'>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleOnChange} placeholder={placeholder}/>
    </div>
  );
}

export default Field;
