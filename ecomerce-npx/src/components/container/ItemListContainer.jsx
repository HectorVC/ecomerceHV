import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gFetch } from "./helpers/getFetch";
import "./ItemDetail/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Cargando .... </h2>
      ) : (
        productos.map((prod) => (
          <div className="col">
                     <div key={prod.id} className="card text-center h-100">
              <img src={prod.img} className="card-img-top w-50" alt={prod.sabor}/>
              <div className="card-body">
                <h5 className="card-title">{prod.sabor}</h5>
                <p className="card-text">
                  Boli artesanal sabor {prod.sabor} 100 % natural base :{prod.base}
                </p>
                <p className="card-text">
                  <Link to={`/detalle/${prod.id}`}>
                    <btn className="btn btn-primary">
                      Detalles
                    </btn>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default ItemListContainer;
