import CardWidget from "../container/CardWidget/CardWidget";
// import imagenes from "../img/imagenes";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img src={CardWidget.img1} alt="logo" />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">

          <a href="/Leche" class="nav-item nav-link">Leche</a>

          
          <a href="/Agua" class="nav-item nav-link">Agua</a>

          </div>
          <a
            href="Cart"
            className="btn btn-danger py-4 px-lg-5 d-none d-lg-block"
          >
           Carrito
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
