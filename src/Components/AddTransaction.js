import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form id='form'>
      <div className='form-control'>
        <label for='text'>text</label>
        <input type="text" id='text' placeholder='enter text...' />
      </div>
      
      <div className='form-control'>
        <label for='Amount'>Amount <br/>
        (Negative - Expense, Positive + Income)</label>

        <input type="Number" id='amount' placeholder='enter Amount...' />
      </div>
      
      <button className='btn'>
        Add Transaction
      </button>
      </form>
    </div>
  )
}

export default AddTransaction
