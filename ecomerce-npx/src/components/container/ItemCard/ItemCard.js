
import { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";

import Button from "../Button/Button";





const ItemCard = ({items}) => {
  // const [items, setItems] = useContext (ItemsContext);
  
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: 400,
        margin: 20,
        border: "2px solid black",
        borderRadius: 4
      }}> 
      <h1>{items.name}</h1>
      <ul>
        <li style={{listStyle:"none"}}>{items.des}</li>
        <li style={{listStyle:"none"}}>$ {items.price}</li>
        <Button items={items}/>
    
      </ul>
    </div>
  );
    };

    export default ItemCard;
