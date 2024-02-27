export default function Footer({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  else {
    const numItem = items.length;
    const packedItem = items.filter((item) => item.packed).length;
    const pakedPercent = (packedItem / numItem) * 100;

    return (
      <footer className="stats">
        <em>
          {pakedPercent === 100
            ? "You got everything! Ready to go ✈️"
            : `🧳 You have ${numItem} items on your list, and you already packed ${packedItem} (${pakedPercent}%)`}
        </em>
      </footer>
    );
  }
}
