import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form id='form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='text'>text</label>

        <input 
        type="text" 
        id='text' 
        value={text} onChange={(e) => setText(e.target.value)} placeholder='enter text...' 
        />

      </div>
      
      <div className='form-control'>
        <label htmlFor='Amount'>Amount <br/>
        (Negative - Expense, Positive + Income)</label>

        <input 
        type="Number" 
        id='amount'
        value={amount} onChange={(e) => setAmount(e.target.value)}
        placeholder='enter Amount...' 
        />
        
      </div>
      
      <button className='btn'>
        Add Transaction
      </button>
      </form>
    </div>
  )
}

export default AddTransaction
