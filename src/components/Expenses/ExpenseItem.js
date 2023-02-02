import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import styled from "styled-components";

const StyledCard = styled(Card)`
  ${({ isActive }) =>
    isActive ? `background-color:tomato` : `background-color:#4b4b4b`};
  cursor: pointer;
`;

const ExpenseItem = ({
  id,
  date,
  title,
  amount,
  updateExpense,
  deleteExpense,
  className,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [dateValue, setDate] = useState(date);
  const [titleValue, setTitle] = useState(title);
  const [amountValue, setAmount] = useState(amount);
  const [onButton, setButton] = useState(false);

  const updateConfirmButtonClickHandler = () => {
    setEditMode(false);

    updateExpense({
      id,
      date: dateValue,
      title: titleValue,
      amount: amountValue,
    });
  };
  // const dragStarted = (e, id) => {
  //   console.log("Drag Start");
  //   e.dataTransfer.setData("todoId", id);
  // };
  // const onDraggingOver = (e) => {
  //   e.preventDefault();
  //   console.log("Dragging over now");
  // };

  // const dragDropped=(e)=>{
  //   console.log("You have dropped")
  //   let transferedId = e.dataTransfer.getData('id');
  //   console.log(transferedId);
  //   dispatch(toggleTodo({toggledId: transferedId, toggledState: 'Todo'}))
  // }

  const start = () => {
    setButton(!onButton);
  };
  useEffect(() => {
    console.log("삭제");
  }, [deleteExpense]);

  const deleteButtonClickHandler = () => {
    deleteExpense(id);
  };
  if (editMode) {
    return (
      <li className={className}>
        <StyledCard className="expense-item" isActive={onButton}>
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            {/* <input
              defaultValue={dateValue}
              onChange={(e) => setDate(e.target.value)}
            /> */}
            <input
              defaultValue={titleValue}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="expense-item__price"
              defaultValue={amountValue}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button onClick={updateConfirmButtonClickHandler}>
            Update Confirm
          </button>
        </StyledCard>
      </li>
    );
  }

  return (
    <li>
      <StyledCard className="expense-item" isActive={onButton} onClick={start}>
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={() => setEditMode(true)}>update</button>
        <button onClick={deleteButtonClickHandler}>Delete</button>
      </StyledCard>
    </li>
  );
};

export default ExpenseItem;
