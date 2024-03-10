import React from 'react';
import './general.css';

export default Button = ({
  label,
  className,
  onClick,
}) => {
  return (
    <button className="button" onClick={onClick}>{label}</button>
  )
}