import './general.css';
import React from 'react';


export default function Input({
  label,
  type,
  className,
  value,
  setValue
}) {
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <container className="text-input">
      <p>{label}</p>
      <input label={label} type={type} className={className} value={value} setValue={setValue} onChange={handleInput}/>
    </container>
  );
}
