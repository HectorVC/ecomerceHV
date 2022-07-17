import React from"react";
import Button from "../Button/Button";
import ItemListContainer from "../ItemListContainer";




const ItemCard = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: 400,
        margin: 20,
        border: "2px solid black",
        borderRadius: 4
      }}> 
      <h1>ItemCard</h1>
      <ul>
        <li style={{listStyle:"none"}}>{items.name}</li>
        <li style={{listStyle:"none"}}>$ {items.price}</li>
        <Button items={items}/>
    
      </ul>
    </div>
  );
    };

    export default ItemCard;
