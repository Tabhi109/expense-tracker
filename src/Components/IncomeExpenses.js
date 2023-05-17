import React from 'react'

const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
      <div className='income'>
        <h4>Income  </h4>
        <p id='money-plus'className='money plus'>&#8377;0.0</p>
      </div>
      <div className='expenses'>
        <h4> Expenses </h4>
        <p id='money-minus' className='money minus'>&#8377;0.0</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
