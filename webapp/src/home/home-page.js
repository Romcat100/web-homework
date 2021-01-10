import React, { Fragment } from 'react'
import TransactionsTable from '../components/TransactionsTable'
import PropTypes from 'prop-types'

export function Home ({ transactions, setTransactions }) {
  return (
    <Fragment>
      <TransactionsTable setTransactions={setTransactions} transactions={transactions} />
    </Fragment>
  )
}

Home.propTypes = {
  transactions: PropTypes.array,
  setTransactions: PropTypes.any
}
