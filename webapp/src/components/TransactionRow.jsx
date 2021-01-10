import React from 'react'
import PropTypes from 'prop-types'

function TransactionRow ({ date, description, category, amount, onDelete }) {
  function formatDate (date) {
    var timestamp = Date.parse(date)
    var formattedDate = Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(timestamp)
    return formattedDate
  }

  return (
    <div className='row'>
      <div className='cell'>{ formatDate(date) }</div>
      <div className='cell'>{ description }</div>
      <div className='cell'>{ category }</div>
      <div className='cell'>${ amount }</div>
      <button className='cell delete' onClick={onDelete}>&#10005;</button>
    </div>
  )
}

TransactionRow.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.string,
  onDelete: PropTypes.any
}

export default TransactionRow
