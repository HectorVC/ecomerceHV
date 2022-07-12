import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";

// const ItemDetail = () => {
// const {id} = useParams();
// console.log (id)
//   return (
//     <div className="card mb-3 w-50">
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="..." className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">SABOR DEL BOLI</h5>
//         <p className="card-text">Descripcion</p>
//         <p className="card-text"><small className="text-muted">Precio por unidad : $ </small></p>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// export default ItemDetail

const ItemDetail = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    gFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
        }, []);

// const ItemDetail = () => {
//   const [productos, setProductos] = useState([]);
  return productos.map((prod) => (
    <div key={prod.id} className="card mb-3 w-50">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{prod.sabor}</h5>
            <p className="card-text">Rico Boli Gourmet a base de {prod.sabor} y {prod.base} {prod.des} {prod.sabor}</p>
            <p className="card-text">
              <small className="text-muted">Precio por unidad : $ </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ItemDetail;
