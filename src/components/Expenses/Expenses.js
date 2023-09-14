import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  // let filterInfoText = '2019, 2021 & 2022';
  // if(filteredYear === '2019') {
  //   filterInfoText = "2020, 2021 & 2022";
  //  } else if(filteredYear === '2021') {
  //   filterInfoText =  "2019, 2020 & 2022";
  //  } else {
  //   filterInfoText = "2019, 2020 & 2021";
  //  }
  // <Card>와 <ExpensesFilter 사이에 <p>Data for years {filterInfoText} is hidden.</p> 추가

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
