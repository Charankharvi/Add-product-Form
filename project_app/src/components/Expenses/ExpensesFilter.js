import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const inputDataChangeHandler = (event) => {
    props.onChangeInputValue(event.target.value);
    console.log(event.target.value)
  };

  const getAllDataByOnChange=()=>{
    props.onChangeAllData(); 
  }
 

  return (
    
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <div>
          
          <input type="input" value={ props.onChangeInput}placeholder="Enter the Item.." onChange={inputDataChangeHandler} style={{margin:"10px",height:"30px"}}></input>

        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option  onChange={getAllDataByOnChange}>All</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
