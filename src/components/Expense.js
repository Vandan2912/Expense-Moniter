import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
    setUpdateForm(true);
    setRData(rData);
    setTitle(RData.title);
    setAmount(RData.amount);
    setDates(new Date(RData.date).toISOString().substring(0, 10));
  };

  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className="new-expense">
            <form>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input
                    type="text"
                    value={Title}
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
                    value={Amount}
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
                    max="2023-12-31"
                    value={Dates}
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
                      console.log(RData);
                      const updateData = {
                        id: RData.id,
                        title: Title,
                        amount: Amount,
                        date: Dates,
                      };

                      let newData = Data.map((item) => {
                        if (parseInt(item.id) === parseInt(updateData.id)) {
                          item.id = updateData.id;
                          item.title = Title;
                          item.amount = Amount;
                          item.date = new Date(Dates);
                        }
                        return item;
                      });
                      console.log(newData);
                      setData(newData);
                      setUpdateForm(false);
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
                  }}
                >
                  {UpdateForm ? "Update" : "Add Expense"}
                </button>
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          {Data.map((item) => (
            <ExpenseItem data={item} onUpdateData={updateData} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};
