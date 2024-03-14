import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

import ExpenseFilter from "./ExpenseFilter";

function Expenses(props)
{
   const [filteredYear,setfilteredYear]=useState('');
    const filterChangeHandler=selectedYear=>
{
    setfilteredYear(selectedYear);
}


return(
<Card className="expenses">
      
<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

       
{props.items.map((expense=>

     
       <ExpenseItem

      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      
      />

))
}
    </Card>
);
}
export default Expenses;