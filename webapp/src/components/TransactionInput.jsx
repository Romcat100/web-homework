import React from 'react'

export default function TransactionInput () {
  return (
    <div className='input-row'>
      <div className='cell'><input type='date' /></div>
      <div className='cell'><input placeholder='Description' /></div>
      <div className='cell'><select name='category'>
        <option value=''>Category</option>
        <option value='Bills'>Bills</option>
        <option value='Charity'>Charity</option>
        <option value='Investments'>Investments</option>
      </select></div>
      <div className='cell'><input placeholder='Amount' step='any' type='number' /></div>
      <div className='cell'><button>X</button></div>
    </div>
  )
}
