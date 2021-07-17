import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data = [], rowActions }) => {
  return (
    <tbody>
      {data.map((item, i) => (
        <TableRow key={item.id} item={item} actions={rowActions} />
      ))}
    </tbody>
  );
};

export default TableBody;
