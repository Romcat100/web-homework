import React from 'react'
import PropTypes from 'prop-types'

function TransactionRow ({ date, description, category, amount }) {
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
      <div className='cell hidden'>&#10005;</div>
    </div>
  )
}

TransactionRow.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.string
}

export default TransactionRow
