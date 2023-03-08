import React from "react";

function TodoHeader({ addItem }) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>TODO List App</h3>
      <form onSubmit={addItem}>
        <input
          type="text"
          style={{
            marginRight: 10,
            width: 200,
            height: 30,
            borderWidth: 0,
            padding: 5,
            borderRadius: 5,
          }}
          placeholder="Enter a todo title"
        ></input>
        <button
          style={{
            width: 100,
            height: 30,
            backgroundColor: "skyblue",
            borderWidth: 0,
            fontWeight: "bold",
            color: "#fff",
            borderRadius: 5,
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoHeader;
