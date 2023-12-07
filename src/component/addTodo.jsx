import { useState } from "react";
import styles from "./addTodo.module.css";

let AddTodo = ({ todoItem, setTodoItem }) => {
  let [inputObject, setObject] = useState({ textVal: "", dateVal: "" });

  // function to add item in the array
  let addItem = () => {
    if (!inputObject.textVal) return;
    if (!inputObject.dateVal) return;

    let newTodoItem = [
      ...todoItem,
      { todo: inputObject.textVal, date: inputObject.dateVal },
    ];

    setTodoItem(newTodoItem);
    let newObj = { textVal: "", dateVal: "" };
    setObject(newObj);
  };

  // these function handles the change event that occurs when their value is changed
  let handleOnChangeText = (event) => {
    let oldDate = inputObject.dateVal;
    let text = event.target.value;
    setObject({ textVal: text, dateVal: oldDate });
  };
  let handleOnChangeDate = (event) => {
    let oldText = inputObject.textVal;
    let date = event.target.value;
    setObject({ textVal: oldText, dateVal: date });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`form-control ${styles.enter}`}
        placeholder="Enter todo here"
        onChange={handleOnChangeText}
        value={inputObject.textVal}
        onKeyDown={(event) => {
          if (event.key === "Enter") addItem();
        }}
      />
      <input
        type="date"
        className={`form-control ${styles.date} `}
        onChange={handleOnChangeDate}
        value={inputObject.dateVal}
        onKeyDown={(event) => {
          if (event.key === "Enter") addItem();
        }}
      />
      <button
        className="btn btn-success"
        onClick={(event) => {
          addItem(event);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
