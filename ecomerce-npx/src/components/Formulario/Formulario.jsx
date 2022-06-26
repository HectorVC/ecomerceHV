import Titulo from "../Titulo/Titulo";

const Formulario = () => {
  return (
    <div>
      <Titulo titulo={"Titulo formulario"} subTitulo={"Subtitulo formulario"}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Titulo>
    </div>
  );
};

export default Formulario;
