import React, { useState } from 'react';

const StockTracker = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Vodka', quantity: 10 },
    { id: 2, name: 'Gin', quantity: 5 },
  ]);

  const addStock = (name, quantity) => {
    setStocks([...stocks, { id: stocks.length + 1, name, quantity }]);
  };

  return (
    <div>
      <h2>Stock Tracker</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>{stock.name}: {stock.quantity}</li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addStock(e.target.name.value, parseInt(e.target.quantity.value));
      }}>
        <input name="name" placeholder="Item Name" />
        <input name="quantity" type="number" placeholder="Quantity" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default StockTracker;
