import React from "react";
import CheckBox from "../CheckBox";

const TableHeader = ({ isSelectAll, onToggleSelectAll, data = [] }) => {
  const headerItems = data.map((item) => <th key={item}>{item}</th>);

  const handleOnToggleSelectAll = () => {
    onToggleSelectAll(!isSelectAll);
  };

  return (
    <thead>
      <tr>
        <th>
          <CheckBox
            onChange={handleOnToggleSelectAll}
            isChecked={isSelectAll}
          />
        </th>
        {headerItems}
      </tr>
    </thead>
  );
};

export default TableHeader;
