import imagenes from "../img/imagenes";

const About =() =>{
    return(
        <>
         <a name="Acerca"></a>
         <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div class="container about px-lg-0">
      <div class="row g-0 mx-lg-0">
        <div class="col-lg-6 ps-lg-0">
          <div class="position-relative h-100">
            <img class="position-absolute img-fluid w-500 h-500" src={imagenes.img3} />
          </div>
          </div>
           </div>
         </div>
         </div>
        </>
    )
    }
    export default About;