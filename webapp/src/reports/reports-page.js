import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import SpendingChart from '../components/SpendingChart'

export function Reports ({ transactions }) {
  const [useRomanNumerals, setUseRomanNumerals] = useState(false)

  return (
    <Fragment>
      <div css={containerStyle}>
        <div className='header'>
          <h3>Spending by Category</h3>
          <input checked={useRomanNumerals} id='roman-numerals' onChange={() => setUseRomanNumerals(!useRomanNumerals)} type='checkbox' />
          <label htmlFor='roman-numerals'>Roman Numerals</label>
        </div>
        <SpendingChart transactions={transactions} useRomanNumerals={useRomanNumerals} />
      </div>
    </Fragment>
  )
}

Reports.propTypes = {
  transactions: PropTypes.array
}

const containerStyle = css`
  width: 800px;
  margin: auto;
  margin-top: 20px;
  padding: 20px 30px;
  box-sizing: border-box;

  .header {
    font-family: 'Libre Baskerville';
    line-height: 30px;
    color: #444;
    margin: 10px 20px 60px 20px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`
