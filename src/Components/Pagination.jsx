import React, { Component } from 'react';

class Pagination extends Component {
  state = {}
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange, onPrevPageChange, onNextPageChange, onGoToPage } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <nav style={{ float: 'right' }}>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => onGoToPage(1)}>First</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={onPrevPageChange} >Previous</a>
          </li>
          {pages.map(page => (
            <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
              <a className="page-link" style={{ cursor: 'pointer' }} onClick={() => onPageChange(page)}>{page}</a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={onNextPageChange}>Next</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => onGoToPage(pagesCount)}>Last</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;