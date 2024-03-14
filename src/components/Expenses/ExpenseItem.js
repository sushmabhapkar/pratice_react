import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
    //function for the Delete button
//  const[isDelete,setIsDelete]=useState(false);
//  const deleteHandler=()=>
//  {
//     setIsDelete(true);
//  };
//  if(isDelete)
//  {
//     return null;
//  }
//function for update
// const[title,setTitle]=useState(props.title);
// const updateHandler=()=>
// {
//     setTitle("Updated!!!");
//     console.log(title);
//     console.log("ExpenseItem Evaluated bt React");
// }
  
    return (
        <div>
        {/* <Card className="expense-item" id={`expenses-${props.id}`}> */}
         <Card className="expense-item" >
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2> 
                <div className="expense-item__price">${props.amount}</div>
                {/* <button onClick={updateHandler}>Update Expense</button> */}
            </div>
            
        </Card>
    </div>
    );
}
export default ExpenseItem;