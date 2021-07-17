import React from 'react';

const TableRowActions = ({
  editMode, 
  onClickEdit, 
  onClickSubmit, 
  onClickDelete, 
  onClickCancel,
}) => {

  return (
    <td>
      {editMode &&
        <button
          onClick={onClickSubmit}
          className="btn btn-success mr-2"
        >
          <i className="fa fa-check"></i>
        </button>
      }
      {editMode &&
        <button
          onClick={onClickCancel}
          className="btn btn-danger mr-2"
        >
          <i className="fa fa-close"></i>
        </button>
      }
      {!editMode &&
        <button
          onClick={onClickEdit}
          className="btn btn-warning mr-2"
        >
          <i className="fa fa-edit"></i>
        </button>
      }
      <button
        onClick={onClickDelete}
        className="btn btn-danger"
      >
        <i className="fa fa-trash"></i>
      </button>
    </td >
  );
};
export default TableRowActions;
