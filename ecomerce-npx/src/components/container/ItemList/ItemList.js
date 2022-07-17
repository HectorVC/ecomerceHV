import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";


// const initialState = [
//   { id: 45454, name: "Keyboard Dell", price: 20 },
//   { id: 45458, name: "Mouse Dell", price: 10 },
//   { id: 45459, name: "Samsung Monitor", price: 300 },
//   { id: 45453, name: "MacBook Pro", price: 860 },
//   { id: 45457, name: "Motorola S10", price: 660 },
// ];

const ItemList = ({ items }) => {
//   const [items, setItems] = useState(initialState);

  return (
    <div>
      <h1> ItemList</h1>
      {items.map((item, idx) => (
        <ItemCard key={idx} items={item} />
      ))}
    </div>

  );
};

export default ItemList;