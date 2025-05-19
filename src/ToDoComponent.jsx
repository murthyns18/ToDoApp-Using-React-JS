import React, { useState } from "react";

function ToDoComponent() {
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItems() {
    if (newItem.trim() !== "") {
      setItem((prev) => [...prev, newItem]);
      setNewItem("");
    }
  }

  const deleteItem = (deleteIndex) => {
    setItem((items) => items.filter((_, index) => index !== deleteIndex));
  };

  const moveItemUp = (index) => {
    if (index === 0) return;

    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [
      newItems[index],
      newItems[index - 1],
    ];
    setItem(newItems);
  };

  const moveDown = (index) => {
    const newItems = [...items];
    if (index === items.length - 1) return;

    [newItems[index + 1], newItems[index]] = [
      newItems[index],
      newItems[index + 1],
    ];
    setItem(newItems);
  };
  return (
    <div className="container">
      <div className="todo-container">
        <h2>My ToDo App</h2>
        <div className="input-container">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item..."
          />
          <button onClick={addItems}>Add Item</button>
        </div>

        <div className="list-container">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{index + 1}. {item}</span>
                <div className="item-controls">
                  <button onClick={() => deleteItem(index)}>Delete</button>
                  <button onClick={() => moveItemUp(index)}>⬆️</button>
                  <button onClick={() => moveDown(index)}>⬇️</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;