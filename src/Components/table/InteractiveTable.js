import React, { useEffect, useState } from "react";
import Table from "./Table";
import Pagination from "../Pagination";
import SearchBox from "../SearchBox";
import * as api from "../../Js/api-mediator";
import { paginate } from "../../Js/utils";

const headerData = ["Name", "Email", "Role", "Actions"];

const InteractiveTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [paginatedUsers, setPaginatedUsers] = useState(filteredUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [isSelectAll, setIsSelectAll] = useState(false);

  const fetchUserDetails = async () => {
    let users = await api.getUserDetailsDetails();
    users.forEach((user) => {
      user.isChecked = false;
      user.canEdit = false;
    });
    setUsers(users);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const getFilteredUsers = (text) => {
    let filteredUsersList = [...users];
    if (text.length) {
      filteredUsersList = filteredUsersList.filter((user) => {
        if (user.name.toLowerCase().includes(text.toLowerCase())) {
          return true;
        } else if (user.role.toLowerCase().includes(text.toLowerCase())) {
          return true;
        } else if (user.email.toLowerCase().includes(text.toLowerCase())) {
          return true;
        }
        return false;
      });
    }
    return filteredUsersList;
  };

  useEffect(() => {
    setFilteredUsers(getFilteredUsers(searchText));
  }, [users, searchText]);

  useEffect(() => {
    setPaginatedUsers(paginate(filteredUsers, pageSize, currentPage));
  }, [filteredUsers, pageSize, currentPage]);

  const handleOnChangeSearchText = (text) => {
    setSearchText(text);
    setCurrentPage(1);
    if (isSelectAll) {
      handleOnToggleSelectAll(false);
      setIsSelectAll(false);
    }
  };

  const handleNext = () => {
    if (Math.ceil(filteredUsers.length / pageSize) !== currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handleDeleteSelected = () => {
    const notDeletedUsers = users.filter((user) => !user.isChecked);
    setUsers(notDeletedUsers);
    setIsSelectAll(false);
  };

  const handleOnClickEdit = (item) => {
    const usersList = [...users];
    const index = usersList.findIndex((user) => user.id === item.id);
    if (index !== -1) {
      usersList.splice(index, 1, item);
    }
    setUsers(usersList);
  };

  const handleOnSelectRow = (item) => {
    const usersList = [...users];
    const index = usersList.findIndex((user) => user.id === item.id);
    if (index !== -1) {
      usersList.splice(index, 1, item);
    }
    setUsers(usersList);
  };

  const handleOnClickSubmit = (item) => {
    const usersList = [...users];
    const index = usersList.findIndex((user) => user.id === item.id);
    if (index !== -1) {
      usersList.splice(index, 1, item);
    }
    setUsers(usersList);
  };

  const handleOnClickCancel = (item) => {
    const usersList = [...users];
    const index = usersList.findIndex((user) => user.id === item.id);
    if (index !== -1) {
      usersList.splice(index, 1, item);
    }
    setUsers(usersList);
  };

  const handleOnClickDelete = (item) => {
    const usersList = [...users];
    const index = usersList.findIndex((user) => user.id === item.id);
    if (index !== -1) {
      usersList.splice(index, 1);
    }
    setUsers(usersList);
  };

  const handleOnToggleSelectAll = (isSelectAll) => {
    const usersList = users.map((user) => {
      if (isSelectAll) {
        const index = paginatedUsers.findIndex(
          (paginatedUser) => user.id === paginatedUser.id
        );
        if (index !== -1) {
          return {
            ...user,
            isChecked: true,
          };
        }
      } else if (!isSelectAll && user.isChecked) {
        return {
          ...user,
          isChecked: false,
        };
      }
      return user;
    });
    setUsers(usersList);
    setIsSelectAll(isSelectAll);
  };

  return (
    <div>
      <SearchBox value={searchText} onChange={handleOnChangeSearchText} />
      <Table
        headerData={headerData}
        bodyData={paginatedUsers}
        rowActions={{
          onSelectRow: handleOnSelectRow,
          onClickEdit: handleOnClickEdit,
          onClickDelete: handleOnClickDelete,
          onClickSubmit: handleOnClickSubmit,
          onClickCancel: handleOnClickCancel,
        }}
        onToggleSelectAll={handleOnToggleSelectAll}
        isSelectAll={isSelectAll}
      />
      <button className="btn btn-danger" onClick={handleDeleteSelected}>
        Delete selected
      </button>
      <Pagination
        itemsCount={filteredUsers.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onNextPageChange={handleNext}
        onPrevPageChange={handlePrev}
        onGoToPage={handleGoToPage}
      />
    </div>
  );
};

export default InteractiveTable;
