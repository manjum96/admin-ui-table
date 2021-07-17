import React, { useState } from 'react';
import CheckBox from '../CheckBox';
import TableBodyItem from './TableBodyItem';
import TableRowActions from './TableRowActions';

const TableRow = ({
  item,
  onChange,
  actions: {
    onClickEdit,
    onClickSubmit,
    onClickDelete,
    onClickCancel,
    onSelectRow,
  },
}) => {
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [role, setRole] = useState(item.role);

  const handleOnSelectRow = (e) => {
    onSelectRow({ ...item, isChecked: !item.isChecked });
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangeRole = (e) => {
    setRole(e.target.value);
  };


  const handleOnClickEdit = () => {
    onClickEdit({ ...item, canEdit: !item.canEdit });
  };

  const handleOnClickSubmit = () => {
    onClickSubmit({ ...item, name, email, role, canEdit: false });
  };

  const handleOnClickCancel = () => {
    onClickCancel({ ...item, canEdit: false });
    setName(item.name);
    setEmail(item.email);
    setRole(item.role);
  };

  const handleOnClickDelete = () => {
    onClickDelete({ ...item });
  };

  return (
    <tr
      key={item.id}
      style={{ backgroundColor: item.isChecked ? "#ece5e5" : null }}
    >
      <td>
        <CheckBox
          onChange={handleOnSelectRow}
          isChecked={item.isChecked}
        />
      </td>
      <TableBodyItem
        value={name}
        onChange={handleOnChangeName}
        disabled={!item.canEdit}
      />
      <TableBodyItem
        value={email}
        onChange={handleOnChangeEmail}
        disabled={!item.canEdit}
      />
      <TableBodyItem
        value={role}
        onChange={handleOnChangeRole}
        disabled={!item.canEdit}
      />
      <TableRowActions
        editMode={item.canEdit}
        onClickEdit={handleOnClickEdit}
        onClickSubmit={handleOnClickSubmit}
        onClickDelete={handleOnClickDelete}
        onClickCancel={handleOnClickCancel}
      />
    </tr>
  );
}

export default TableRow;