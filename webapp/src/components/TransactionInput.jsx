import React from 'react'
import PropTypes from 'prop-types'

function TransactionInput ({ onSubmit }) {
  let amountInput = React.createRef()
  let categoryInput = React.createRef()
  let dateInput = React.createRef()
  let descriptionInput = React.createRef()

  function validateInput () {
    let invalidFields = []

    if (amountInput.current.value === '') {
      invalidFields.push(amountInput)
    }
    if (categoryInput.current.value === '') {
      invalidFields.push(categoryInput)
    }
    if (descriptionInput.current.value === '') {
      invalidFields.push(descriptionInput)
    }
    if (dateInput.current.value === '') {
      invalidFields.push(dateInput)
    }

    return invalidFields
  }

  function onSubmitButtonClick () {
    // validate input
    let invalidFields = validateInput()
    if (invalidFields.length > 0) {
      for (let i = 0; i < invalidFields.length; i++) {
        invalidFields[i].current.focus()
      }
      return
    }

    // submit input
    onSubmit({
      amount: amountInput.current.value,
      category: categoryInput.current.value,
      date: dateInput.current.value,
      description: descriptionInput.current.value
    })

    // clear fields
    amountInput.current.value = ''
    categoryInput.current.value = ''
    dateInput.current.value = ''
    descriptionInput.current.value = ''
  }

  return (
    <div className='input-row'>
      <div className='cell'><input ref={dateInput} type='date' /></div>
      <div className='cell'><input placeholder='Description' ref={descriptionInput} /></div>
      <div className='cell'><select ref={categoryInput}>
        <option value=''>Category</option>
        <option value='Bills'>Bills</option>
        <option value='Charity'>Charity</option>
        <option value='Investments'>Investments</option>
      </select></div>
      <div className='cell'><input placeholder='Amount' ref={amountInput} step='any' type='number' /></div>
      <div className='cell'><button onClick={onSubmitButtonClick}>&#10148;</button></div>
    </div>
  )
}

TransactionInput.propTypes = {
  onSubmit: PropTypes.any
}

export default TransactionInput
