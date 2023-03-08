import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function TodoApp() {
  const [itemList, setItemList] = useState([
    {
      title: "Take a shower",
      done: false,
    },
    {
      title: "Grab a cup of Coffee",
      done: true,
    },
    {
      title: "Shower please",
      done: true,
    },
  ]);
  const addItem = (event) => {
    event.preventDefault();
    const newItems = { title: event.target[0].value, done: false };
    setItemList([...itemList, newItems]);
    event.target.reset();
  };

  function deleteItem(index) {
    const newItems = [...itemList];
    newItems.splice(index, 1);
    setItemList(newItems);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <TodoHeader addItem={addItem} />
        <TodoList itemList={itemList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default TodoApp;
