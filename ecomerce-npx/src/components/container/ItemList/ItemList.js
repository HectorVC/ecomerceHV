import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = () => {
  const [items, setItems] = useContext(ItemsContext);

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