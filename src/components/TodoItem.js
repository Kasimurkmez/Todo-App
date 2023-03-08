import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

function TodoItem({ item, index, deleteItem }) {
  const [strikethrough, setStrikethrough] = useState(false);
  const styles = {
    container: {
      border: "1px solid #000",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingInline: 10,
    },
    checkbox: {
      marginRight: "20px",
    },
    text: {
      textDecoration: strikethrough && "line-through",
    },
  };
  return (
    <div style={styles.container}>
      <p style={styles.text}>{item.title}</p>
      <span>
        <input
          type="checkbox"
          style={styles.checkbox}
          onChange={() => setStrikethrough(!strikethrough)}
          checked={strikethrough}
        />
        <DeleteOutlined onClick={() => deleteItem(index)} />
      </span>
    </div>
  );
}

export default TodoItem;
