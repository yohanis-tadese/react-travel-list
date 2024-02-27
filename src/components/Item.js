export default function Item({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateItems(item.id)}
      />
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
