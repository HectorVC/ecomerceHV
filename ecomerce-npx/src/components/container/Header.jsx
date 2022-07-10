import imagenes from "./img/imagenes";
import { useState,useEffect } from "react";


const Header = ({greeting}) => {
const [count,setCount]= useState(0)
const [date,setDate]= useState(Date())


const aumentar = () => {
setCount(count +1)
setDate(Date())
}

useEffect(()=>{
console.log('se ejecuta siempre al cargar montado')
})

useEffect(()=>{
console.log('se ejecuta 1 sola vez')
},[])

console.log('ItemListContainer')
console.log(count)

    return (
     <>
      <div class="container-fluid p-0 pb-5">
    <div class="owl-carousel header-carousel position-relative">
      <div class="owl-carousel-item position-relative">
        <img class="img-fluid" src={imagenes.img2} alt=""/>
        <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                    <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-8 text-center">
                <h6 class="text-black text-uppercase mb-3 animated slideInDown">Cuidando la industria</h6>
                <h1 class="display-3 text-black animated slideInDown mb-4">HV COMPRESSORS</h1>
                <p class="fs-5 fw-medium text-black mb-4 pb-2">Mantenimiento especializado en compresores industriales.</p>
                <a href="pages/contacto.html" class="btn btn-danger py-md-3 px-md-5 me-3 animated slideInLeft">Contactanos</a>
                <a href="#Info" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Mas informacion</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
<div>
  {date}
{count}
<button onClick={aumentar}>"Aumentar numero"</button>


</div>



 </>
 
        );
    };
 
 export default Header;
 