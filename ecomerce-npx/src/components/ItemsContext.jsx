import React, { createContext, useState} from "react";

export const ItemsContext = createContext();

const initialState = [
  { id: 1, name: "Coco", price: 15 },
  { id: 2, name: "Nutella ", price: 20 },
  { id: 3, name: "Cajeta ", price: 20 },
  { id: 4, name: "Oreo ", price: 15 },
  { id: 5, name: "Rompope", price: 20 },
];


export const ItemsProvider = ({children}) => {
const [ items , setItems ] = useState (initialState);
return (
    <ItemsContext.Provider value ={[items,setItems]}>
{children}

    </ItemsContext.Provider>


)


};