import { useState, useEffect } from 'react';

const url = "http://localhost:5000/users";

async function fetchUsuarios(url){
    const response = await fetch(url);
    const listadoUsuarios = await response.json();
    return listadoUsuarios;
}

function ListadoUsuarios(){
    const [loadedUsuarios, setLoadedUsuarios] = useState([]);
     const [datosUsuario, setDatosUsuario] = useState("")

    useEffect(function () {
        fetchUsuarios(url).then((fetchedUsuarios) => setLoadedUsuarios(fetchedUsuarios));
    },)
    
    return(
        <div>
            {loadedUsuarios.map((usuario) =>(
                <ul key={usuario.id}>
                    <div>
                        <li>{usuario.username}</li>
                        <button onClick={()=>{
                            let id = usuario.id
                            const mostrarDatosUsuario = loadedUsuarios.find((usuario) => usuario.id === id);
                            setDatosUsuario(mostrarDatosUsuario)

                            {datosUsuario && (
                                <div>
                                    <li>{usuario.name}</li>
                                    <li>{usuario.phone}</li>
                                    <li>{usuario.email}</li>
                                </div>
                            )}
                        }}>Mostrar datos</button>
                        </div>
                </ul>
        ))} 
        </div>
    );
}

export default ListadoUsuarios;