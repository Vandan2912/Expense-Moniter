import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export const Expense = (props) => {
  const expensesData = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [Id, setId] = useState(5);
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [Dates, setDates] = useState("");
  const [Data, setData] = useState(expensesData);
  const [UpdateForm, setUpdateForm] = useState(false);
  const [RData, setRData] = useState({});

  const updateData = (rData) => {
    setUpdateForm(!UpdateForm);
    setRData(rData);
  };
  return (
    <div className="App">
      <div className="new-expense">
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={UpdateForm ? RData.title : Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={UpdateForm ? RData.amount : Amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={
                  UpdateForm
                    ? new Date(RData.date).toISOString().substring(0, 10)
                    : Dates
                }
                onChange={(e) => {
                  setDates(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (UpdateForm) {
                } else {
                  setId(Id + 1);
                  e.preventDefault();
                  const newData = {
                    id: Id,
                    title: Title,
                    amount: Amount,
                    date: Dates,
                  };
                  console.log(newData);
                  setData((Data) => [...Data, newData]);
                }
                setTitle("");
                setAmount("");
                setDates("");
                setUpdateForm(!UpdateForm);
              }}
            >
              {UpdateForm ? "Update" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
      {Data.map((item) => (
        <ExpenseItem data={item} onUpdateData={updateData} />
      ))}
    </div>
  );
};
