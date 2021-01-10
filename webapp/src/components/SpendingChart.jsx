import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import ChartistGraph from 'react-chartist'
import convertToRomanNumerals from '../utils/romanNumerals'

function SpendingChart ({ transactions, useRomanNumerals }) {
  // calculate spend per category
  const categories = transactions.reduce((categories, { category, amount }) => {
    categories[category] = (categories[category] || 0) + parseInt(amount)
    return categories
  }, {})

  let amountSeries = []
  let categoryLabels = []
  for (const [key, value] of Object.entries(categories)) {
    amountSeries.push(value)
    const displayAmount = useRomanNumerals ? convertToRomanNumerals(value) : value
    categoryLabels.push(`${key} ($${displayAmount})`)
  }

  let data = {
    series: amountSeries,
    labels: categoryLabels
  }
  let options = {
    donut: true,
    showLabel: true
  }

  return (
    <div css={chartStyle}>
      <ChartistGraph data={data} options={options} type='Pie' />
    </div>
  )
}

SpendingChart.propTypes = {
  transactions: PropTypes.any,
  useRomanNumerals: PropTypes.bool
}

export default SpendingChart

const chartStyle = css`
  height: 400px;
  margin-bottom: 50px;

  .ct-chart {
    height: 100%;
  }

  .ct-chart-donut {
    overflow: visible;
  }

  .ct-label {
    fill: black;
    font-size: 16px;
  }

  .ct-slice-donut {
    stroke-width: 150px !important;
  }

  .ct-series-a .ct-slice-donut {
    stroke: #9399b3;
  }
  .ct-series-b .ct-slice-donut {
    stroke: #ABA69B;
  }
  .ct-series-c .ct-slice-donut {
    stroke: #828282;
  }
}
`
