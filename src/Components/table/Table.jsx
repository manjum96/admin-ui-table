import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


const Table = ({
  headerData, bodyData, rowActions, onToggleSelectAll, isSelectAll
}) => {

  return (
    <table className="table-bordered table">
      <TableHeader
        data={headerData}
        onToggleSelectAll={onToggleSelectAll}
        isSelectAll={isSelectAll}
      />
      <TableBody
        data={bodyData}
        rowActions={rowActions}
      />
    </table>
  );
};

export default Table;
