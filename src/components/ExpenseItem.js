import React from "react";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        {new Date(props.data.date).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>

        <div className="expense-item__price">${props.data.amount}</div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          const requireData = {
            id: props.data.id,
            title: props.data.title,
            amount: props.data.amount,
            date: new Date(props.data.date),
          };
          props.onUpdateData(requireData);
        }}
      >
        Change
      </button>
      {/* Change */}
    </div>
  );
};

export default ExpenseItem;
