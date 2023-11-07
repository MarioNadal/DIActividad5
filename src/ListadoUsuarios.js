import { useState, useEffect } from 'react';

const url = "http://localhost:5000/users";

async function fetchUsuarios(url){
    const response = await fetch(url);
    const listadoUsuarios = await response.json();
    return listadoUsuarios;
}

function ListadoUsuarios(){
    const [loadedUsuarios, setLoadedUsuarios] = useState([]);
    const [loadedUsuario, setLoadedUsuario] = useState("");
    const [id, setId] = useState();
    const url2 = "http://localhost:5000/users/"+id;

    useEffect(function () {
        fetchUsuarios(url).then((fetchedUsuarios) => setLoadedUsuarios(fetchedUsuarios));
    }, [])
    
    useEffect(function() {
        fetchUsuarios(url2).then((fetchUsuario) => setLoadedUsuario(fetchUsuario));
    }, [id])

    return(
        <div>
            {loadedUsuarios.map((usuario) =>(
                <ul key={usuario.id}>
                    <div>
                        {usuario.username}
                        <span> </span>
                        <button onClick={()=>{setId(parseInt(usuario.id))}}>Mostrar datos</button>
                        {loadedUsuario.id===usuario.id && (
                            <div>
                                <ul>{loadedUsuario.name}</ul>
                                <ul>{loadedUsuario.phone}</ul>
                                <ul>{loadedUsuario.email}</ul>
                            </div>
                            )}
                    </div>
                </ul>
        ))} 
        </div>
    );
}

export default ListadoUsuarios;