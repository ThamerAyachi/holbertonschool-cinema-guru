import React from 'react';
import './general.css';

export default SearchBar = ({
  title,
  setTitle,
}) => {
  const hendleInput = (e) => {
    setTitle(e.target.value)
  }
  return (
    <container className="search">
      <input type="text" placeholder="Search Movies" title={title} setTitle={setTitle} onChange={hendleInput}/>
    </container>
  )
}