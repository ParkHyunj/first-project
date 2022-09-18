import React from 'react';
import '../post/Paging.css';
import Pagination from 'react-js-pagination';

function Paging2({ 
  totalCount, postPerPage, pageRangeDisplayed, 
  handlePageChange, page
  }) {

  return (
      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={totalCount ? totalCount : 0}
        pageRangeDisplayed={pageRangeDisplayed}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
      />
    );
  };
export default Paging2;