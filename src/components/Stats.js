export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything.Ready to go! ✈️"
          : `👜You Have ${numItems} items on you list and you
        already packed ${numOfPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
