import React, { createContext, useState} from "react";

export const ItemsContext = createContext();

const initialState = [
  { id: 1, name: "Coco", price: 15, des: "Rico boli artesanal con rayadura de coco" , },
  { id: 2, name: "Nutella ", price: 20, des: "Rico boli artesanal con chocolate nutella",},
  { id: 3, name: "Cajeta ", price: 20, des: "Rico boli artesanal de dulce de leche",},
  { id: 4, name: "Oreo ", price: 15,des: "Rico boli artesanal con trozos de galleta oreo" ,},
  { id: 5, name: "Rompope", price: 20,des: "Rico boli artesanal con rompope", },
];


export const ItemsProvider = ({children}) => {
const [ items , setItems ] = useState (initialState);
return (
    <ItemsContext.Provider value ={[items,setItems]}>
{children}

    </ItemsContext.Provider>


)


};