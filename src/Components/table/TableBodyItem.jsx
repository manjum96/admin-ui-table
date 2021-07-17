import React from 'react';

const TableBodyItem = ({
  onChange, value, disabled
}) => {
  const handleOnChange = (e) => {
    onChange(e);
  };

  return (
    <td>
      <input
        type="text"
        value={value}
        style={{ borderWidth: disabled ? 0 : 1 }}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </td>
  );
};
export default TableBodyItem;
