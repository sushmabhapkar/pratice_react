import React,{ useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseChart from "./ExpenseChart";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props)
{
   const [filteredYear,setfilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>
{
    setfilteredYear(selectedYear);
}

const filteredExpenses=props.items.filter(expense=>{

    return expense.date.getFullYear().toString()===filteredYear;
});





return(
<Card className="expenses">
      
<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

<ExpenseChart expenses={filteredExpenses}/>
<ExpenseList items={filteredExpenses}/>
    </Card>
);
}
export default Expenses;