import React from "react";

const Button = ({ items }) => {
const returnName = (items) => {
    alert(items.name) ;
};
 
return (

    <div>
        <button onClick={returnName}>{items.name}</button>
    </div>
);

};

export default Button;