import './general.css';
import React from 'react';


export default function SelectInput({
  label,
  options,
  className,
  value,
  setValue
}) {
  const hendleInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <container className="sort-feature">
      <p>{label}</p>
      <select label={label} options={options} className={className} value={value} setValue={setValue} onChange={hendleInput}>
      {options.map((options) => (
        <option value={option.value}>{option.label}</option>
      ))}
      </select>
    </container>
  );
}
