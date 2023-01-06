import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

 
  const [filteredYear, setFilteredYear] = useState("");
  const [onChangeInputData,setOnchangeInputData]=useState("")
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
   
  };

  
  const onChangeInputValuehandler = (enteredYear) => {
    setOnchangeInputData(enteredYear);
};

const filteredExpenses = props.items.filter((expense) => {
  
 if(filteredYear.includes('All')){
  return expense.title.toLowerCase().includes(onChangeInputData.toLowerCase());
} else {
  return expense.date.getFullYear().toString() === filteredYear && expense.title.toLowerCase().includes(onChangeInputData.toLowerCase());
}
 });

  


  


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}

           onChangeInputValue={onChangeInputValuehandler}
           onChangeInput={onChangeInputData}
        />
        






         {
           
           
          

    
         filteredExpenses.length > 0 ? filteredExpenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
         
            />
            )) :  <ExpenseItem
                  noData={true}
            />



         }

 {/* rfce */}


      </Card>
    </div>
  );
};

export default Expenses;
