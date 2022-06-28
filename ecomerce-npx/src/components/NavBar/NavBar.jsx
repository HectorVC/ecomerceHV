import CardWidget from "../container/CardWidget/CardWidget";
// import imagenes from "../img/imagenes";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="index.html"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img src={CardWidget.img1} alt="logo" />
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" class="nav-item nav-link active">
              Inicio
            </a>
            <a href="#Acerca" class="nav-item nav-link">
              Acerca
            </a>
            <a href="#Servicios" class="nav-item nav-link">
              Servicios
            </a>
            <a href="#Proyectos" class="nav-item nav-link">
              Proyectos
            </a>
            <a href="pages/contacto.html" class="nav-item nav-link">
              Contactanos
            </a>
          </div>
          <a
            href="pages/cotizar.html"
            class="btn btn-danger py-4 px-lg-5 d-none d-lg-block"
          >
            Cotizar
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
