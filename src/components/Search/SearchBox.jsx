import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({getValue}) => {
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
       if(value === '') return;
        getValue(value);
        setValue('');
      };
 
  return (
    <form action="form" onSubmit={handleSubmit}>
    <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
    <button type="submit">Search</button>
  </form>
  );
};

SearchBox.propTypes = {
    getValue: PropTypes.func.isRequired,
  };