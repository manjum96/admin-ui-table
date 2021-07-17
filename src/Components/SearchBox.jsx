import React, { Component } from 'react';

const SearchBox = ({ searchText, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e.currentTarget.value);
  }
  return (
    <div className='searchBox'>
      <input
        value={searchText}
        type={'text'}
        className='form-control'
        width="50px"
        onChange={handleOnChange}
        placeholder={'Search by name, role or email'} />
    </div>
  );
}

export default SearchBox;