import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("travelerItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("travelerItems", JSON.stringify(items));
  }, [items]);

  function handleOnAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleOnDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleOnUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleOnAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleOnDeleteItems}
        onUpdateItems={handleOnUpdateItems}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}
