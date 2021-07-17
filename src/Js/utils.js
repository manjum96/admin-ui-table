export const paginate = (items, pageSize, pageNumber) => {
  const indexOfLastPage = pageNumber * pageSize;
  const indexOfFirstPage = indexOfLastPage - pageSize;
  return items.slice(indexOfFirstPage, indexOfLastPage);
}