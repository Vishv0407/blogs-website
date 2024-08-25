import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './all-page.css'

const Pagination = () => {

  const {currentPage, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className='pagination-container'>
      <div className='pagination-items'>
        <div>
          {
            currentPage > 1 &&
            (<button className='pagination-btn' onClick={() => handlePageChange(currentPage-1)}>
            Previous
            </button>)
          }

          {
            currentPage < totalPages &&
            (<button className='pagination-btn' onClick={() => handlePageChange(currentPage+1)}>
            Next
            </button>)
          }
        </div>

        <div className='pages-number'>
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  )
}

export default Pagination