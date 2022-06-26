




const Titulo = ( obj ) => {
    console.log (obj)
    return (
        <>
            <h1>{ obj.titulo }</h1>
               <h2>{ obj.subTitulo}</h2>
               {obj.children}
        </>
    )
    }

    export default Titulo