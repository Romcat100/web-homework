import React from 'react'
import PropTypes from 'prop-types'

function TransactionRow ({ date, description, category, amount }) {
  return (
    <div className='row'>
      <div className='cell'>{ date }</div>
      <div className='cell'>{ description }</div>
      <div className='cell'>{ category }</div>
      <div className='cell'>{ amount }</div>
      <div className='cell'>X</div>
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
