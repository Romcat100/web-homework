import React from 'react'
import { css } from '@emotion/core'
import TransactionInput from './TransactionInput'
import TransactionRow from './TransactionRow'

export default function TransactionsTable () {
  const transactions = getStartingTransactions()

  return (
    <div css={containerStyle}>
      <h3>Transactions</h3>
      <div css={tableStyle}>
        <TransactionInput />
        {transactions.map((t, i) =>
          <TransactionRow amount={t.amount} category={t.category} date={t.date} description={t.description} key={i} />
        )}
      </div>
    </div>
  )
}

function getStartingTransactions () {
  return [
    {
      amount: '$200',
      category: 'Investments',
      date: 'Jan 5, 2021',
      description: 'ESG stocks'
    },
    {
      amount: '$200',
      category: 'Charity',
      date: 'Jan 2, 2021',
      description: 'Donations'
    },
    {
      amount: '$400',
      category: 'Bills',
      date: 'Jan 1, 2021',
      description: 'Water bill'
    }
  ]
}

const containerStyle = css`
  width: 800px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  padding: 20px 30px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 26px 20px -20px rgba(0, 0, 0, 0.1);

  h3 {
    font-family: 'Libre Baskerville';
    font-size: 24px;
    line-height: 30px;
    color: #444;
    margin: 20px 20px 10px 20px;
  }
`

const tableStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;

  .table-body {
    height: calc(100% - 140px);
    overflow-y: auto;
  }

  .input-row, .row {
    display: flex;
  }

  .row {
    cursor: pointer;
    border-top: 1px solid #ddd;
  }

  .row:hover {
    background-color: #fafafa;
  }

  .cell {
    padding: 0.8em 1.2em;
    overflow: hidden;
  }

  .cell:first-of-type {
    flex-basis: 25%;
  }
  .cell:nth-of-type(2) {
    flex-basis: 30%;
  }
  .cell:nth-of-type(3) {
    flex-basis: 15%;
  }
  .cell:nth-of-type(4) {
    flex-basis: 12%;
  }
  .cell:nth-of-type(5) {
    flex-basis: 3%;
    text-align: center;
  }

  .cell > input {
    width: 100%;
  }
  
  button, input, select {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.3;
    margin: 0;
  }
`
